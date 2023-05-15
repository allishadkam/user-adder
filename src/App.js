import React, { useState } from 'react'
import Userlist from './components/users/Userlist';
import UserAdd from './components/users/UserAdd';

function App() {
  const [userslist,setuserslist]=useState([]);
  const clickhandler=(uname,uage)=>{
    setuserslist(perv=>{
      return ([...perv,{name:uname,age:uage,id:Math.random().toString()}])
    })
  }
  return (
    <div>
      <UserAdd onadduser={clickhandler}/>
      <Userlist users={userslist}/>
    </div>
  );
}

export default App;
