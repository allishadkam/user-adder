import React from 'react'
import Userlist from './components/users/Userlist';
import UserAdd from './components/users/UserAdd';

function App() {
  return (
    <div>
      <UserAdd/>
      <Userlist users={[]}/>
    </div>
  );
}

export default App;
