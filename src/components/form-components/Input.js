import React from 'react';

const Input = (props) => (
  <input type="text" placeholder="Enter your name" value={props.personName} onChange={props.handleNameChange} />
);

export default Input;