import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {

 const [userName, setUserName] = useState('');
 const [userAge, setAge] = useState('');

  const AddUserHandler = (event) => {
    event.preventDefault();

    if(userName.trim().length === 0 || userAge.trim().length === 0){
         return;
    }
    if(+userAge < 1 ){
        return;
    }
    console.log(userName, userAge);
    props.setData(userName, userAge)
    setUserName('');
    setAge('');
  
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
    
  };

  const userAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Card cssClass={styles.addUser}>
        <form className="" onSubmit={AddUserHandler}>
          <label htmlFor="username" >Username</label>
          <input type="text" id="username" value={userName} onChange={usernameChangeHandler} />
          <label htmlFor="userAge">Age</label>
          <input type="number" id="userAge" value={userAge} onChange={userAgeChangeHandler}/>
          <Button cssClass={styles.submit} type='submit' process={AddUserHandler}></Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
