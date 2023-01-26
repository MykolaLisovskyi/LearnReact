import './App.css';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';
import React, { useState } from 'react';

function App() {
  
  const [usersData, setUsersData] = useState([
    { name: 'Kolya!', age:'10', id: 'g1' }
  ]);


  return (
    <div >
     <AddUser setData={setUsersData}></AddUser>
     <UserList users={usersData}></UserList>
    </div>
  );
}

export default App;
