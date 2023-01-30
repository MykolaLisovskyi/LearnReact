import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ModuleMessage from "../UI/ModuleMessage";

const AddUser = (props) => {

const nameInputRef = useRef();
const ageInputRef = useRef();


  const [error, setError] = useState("");

  const closeError = () => {
    setError();
    return error;
  };

  const AddUserHandler = (event) => {
    event.preventDefault();
const userNameRef = nameInputRef.current.value;
const userAgeRef = ageInputRef.current.value;

    if (userNameRef.trim().length === 0 || userAgeRef.trim().length === 0) {
      setError(
        <ModuleMessage
          title="An error occured"
          message="Username and Age must be filled "
          process={closeError}
        ></ModuleMessage>
      );
      return error;
    }
    if (+userAgeRef < 1) {
      setError(
        <ModuleMessage
          title="An error occureds"
          message="Age<1"
          process={closeError}
        ></ModuleMessage>
      );
      return error;
    }
    console.log(userNameRef, userAgeRef);
    props.setData(userNameRef, userAgeRef);
    nameInputRef.current.value='';
    ageInputRef.current.value='';

  };


  return (
    <>
      {error}
      <Card cssClass={styles.addUser}>
        <form className="" onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
        
            ref={nameInputRef}
          />
          <label htmlFor="userAge">Age</label>
          <input
            type="number"
            id="userAge"
   
            ref={ageInputRef}
          />
          <Button
            cssClass={styles.submit}
            type="submit"
            process={AddUserHandler}
          ></Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
