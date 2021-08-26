import React from 'react';

const Input = ({ onChange, value }) => {
  return(
    <input type="text" onChange={onChange} value={value}/>
  )

}

export default Input;