import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from '../users/UserAdd.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const UserAdd = (props) => {
    const [enterdusername,setenterdusername]=useState('')
    const [enterdage,setenterdage]=useState('')
    const adduserhandler =(e)=>{
        e.preventDefault();
        if(enterdusername.trim().length===0 || enterdage.trim().length===0){
            return;
        }
        if(+enterdage<1){
            return;  
        }
        props.onadduser(enterdusername,enterdage)
        setenterdusername('');
        setenterdage('');
        }
    const usermanechangehandler=(event)=>{
        setenterdusername(event.target.value)
    }
    const agechangehandler=(e)=>{
        setenterdage(e.target.value)
    }


  return (
    <div>
    <ErrorModal title='error accured' message='something went wrong'/>
    <Card className={classes.input}>
        <form onSubmit={adduserhandler}>
        <label htmlFor='username'>User Name :</label>
        <input id='username' type="text" value={enterdusername} onChange={usermanechangehandler}></input>
        <label htmlFor='age'>age :</label>
        <input id='age' type='number' value={enterdage} onChange={agechangehandler}></input>
        <Button type="submit" >Add User</Button>
        </form>
    </Card>
    </div>
  )
}

export default UserAdd
