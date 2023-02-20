import React from "react"

const Image = props => {
  
  return (
    <img
      src= {props.filename}
      alt={props.alt}
      width={"100%"}
      height={'100%'}
   
    />
  )
}

export default Image
