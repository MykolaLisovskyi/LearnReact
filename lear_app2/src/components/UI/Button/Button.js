import React from 'react';
import but from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={but.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
