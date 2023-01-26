import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {

 const [userName, setUserName] = useState('');
 const [age, setAge] = useState('');

  const AddUserHandler = (event) => {
    event.preventDefault();

    if(userName.trim().length === 0 || age.trim().length === 0){
         return;
    }
    if(+age < 1 ){
        return;
    }
    console.log(userName, age);
    setUserName('');
    setAge('');
    props.setData(prevUsers => {
        const updatedUsers = [...prevUsers];
        updatedUsers.unshift({ name: userName, age:age, id: Math.random().toString() });
        return updatedUsers;
      });
  };

  const usernameChangeHandler = (event) => {
    setUserName(event.target.value);
    
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Card cssClass={styles.addUser}>
        <form className="" onSubmit={AddUserHandler}>
          <label htmlFor="username" >Username</label>
          <input type="text" id="username" value={userName} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={age} onChange={ageChangeHandler}/>
          <Button cssClass={styles.submit} type='submit' process={AddUserHandler}></Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
