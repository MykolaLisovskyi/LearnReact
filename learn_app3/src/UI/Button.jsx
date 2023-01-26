import React from 'react';

const Button = props => {
  return (
    <button type={props.type} className={props.cssClass} onClick={props.process}>
      submit
    </button>
  );
};

export default Button;