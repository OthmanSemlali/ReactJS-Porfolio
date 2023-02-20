import { Outlet } from 'react-router-dom';
import Layout from './layout';



const Home = () => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
};
export default Home;
 