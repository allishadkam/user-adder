import React from 'react'
import Card from '../UI/Card'
import styles from '../users/Userlist.module.css'


const Userlist = (props) => {

  ////////////commit test 
  return (
    <Card className={styles.users}>
        <ul>
        {props.users.map(user=>{
            return <li key={user.id}>{user.name} ({user.age} years old)</li>
        })}
        </ul>
    </Card>
    
  )
}

export default Userlist
