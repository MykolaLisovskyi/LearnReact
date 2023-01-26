import './App.css';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';
import React, { useState } from 'react';

function App() {
  
  const [usersData, setUsersData] = useState([
    { name: 'Kolya!', age:'10', id: 'g1' }
  ]);
  const setData = (setName, setAge) =>{
    setUsersData(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: setName, age:setAge, id: Math.random().toString() });
      return updatedUsers;
    });
  }


  return (
    <div >
     <AddUser setData={setData}></AddUser>
     <UserList users={usersData}></UserList>
    </div>
  );
}

export default App;
