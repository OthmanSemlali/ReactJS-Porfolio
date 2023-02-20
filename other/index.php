
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");


try {
    $db = new PDO('mysql:host=localhost;dbname=DB_NAME', 'DB_USER', 'DB_PASSWORD');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $error = $e->getMessage();
    echo $error;
}



if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the raw input data from the request body
    $input_data = file_get_contents('php://input');

    // Decode the JSON input data into an associative array
    $data = json_decode($input_data, true);

    // Check if the data is valid
    if (!$data || !isset($data['email']) || !isset($data['message'])) {
        $response = array(
            'status' => 400,
            'response' => 'Invalid data'
        );
    } else {
        // Sanitize the input data
        $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
        $message = filter_var($data['message'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        // Insert the data into the database
        $query = "INSERT INTO contact(name, message) VALUES(:name, :message)";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':name', $email);
        $stmt->bindValue(':message', $message);

        $res = $stmt->execute();
        if ($res) {
            $response = array(
                'status' => 200,
                'response' => 'Inserted'
            );
        } else {
            $response = array(
                'status' => 500,
                'response' => 'Internal server error'
            );
        }
    }

    // Send the response as JSON
    header('Content-Type: application/json');
    echo json_encode($response);


      // Send an email with the form data

    //   $to = 'othmansemlali1@gmail.com';
    //   $subject = 'New message from contact form';
    //   $body = "Name: $email\n\nMessage: $message";
    //   $headers = "From: example@example.com\r\n";
    //   $headers .= "Reply-To: user@example.com\r\n";
    //   mail($to, $subject, $body, $headers);
}
