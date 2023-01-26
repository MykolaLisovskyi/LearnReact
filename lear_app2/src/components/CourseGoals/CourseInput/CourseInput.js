import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import input from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valid, setValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    enteredValue.trim().length !== 0 ? setValid(true) : setValid(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    enteredValue.trim().length === 0 ? setValid(false) : setValid(true);
    props.onAddGoal(enteredValue)
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${input["form-control"]} ${!valid ? input.invalid : ''}`}>
        <label >Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
