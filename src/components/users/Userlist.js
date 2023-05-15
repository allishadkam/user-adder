import React from 'react'
import Card from '../UI/Card'
import styles from '../users/Userlist.module.css'
const Userlist = (props) => {
  return (
    <Card className={styles.users}>
        <ul>
        {props.users.map(user=>{
            return <li>{user.name} ({user.age} years old)</li>
        })}
        </ul>
    </Card>
    
  )
}

export default Userlist
