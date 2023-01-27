import React from 'react';
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.process}>
      submit
    </button>
  );
};

export default Button;