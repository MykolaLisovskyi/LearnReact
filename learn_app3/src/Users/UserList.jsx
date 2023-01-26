import React from "react";
import Card from "../UI/Card";
import list from "./UserList.module.css"
const UserList = (props) => {
  return (
    <>
      <Card cssClass={list.userList}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              <p className=""> {user.name}( {user.age} )</p>
             
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UserList;
