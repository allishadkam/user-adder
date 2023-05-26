import React, { useState ,useRef } from 'react'
import Card from '../UI/Card'
import classes from '../users/UserAdd.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const UserAdd = (props) => {

    const username= useRef();
    const userage= useRef();

    const [error,seterror]=useState()

    const adduserhandler =(e)=>{
        e.preventDefault();

        const nametemp = username.current.value;
        const agetemp = userage.current.value;

        if(nametemp.trim().length===0 || agetemp.trim().length===0){
            seterror({
                title:'Invalid Input',
                message:'Please Enter a Valid name and age (none enpty values)'
            })
            return;
        }
        if(+agetemp<1){
            seterror({
                title:'Invalid age',
                message:'Please Enter a Valid age (bigger than one)'
            })  
            return;
        }

        props.onadduser(nametemp,agetemp);

        username.current.value = "";
        userage.current.value = "";
        };
    
    const errorhandler =()=>{
        seterror(null);
    }


  return (
    <div>
    {error&&<ErrorModal onconfirm={errorhandler} title={error.title} message={error.message}/>}
    <Card className={classes.input}>
        <form onSubmit={adduserhandler}>
        <label htmlFor='username'>User Name :</label>
        <input ref={username} id='username' type="text" ></input>
        <label htmlFor='age'>age :</label>
        <input ref={userage} id='age' type='number'></input>
        <Button type="submit" >Add User</Button>
        </form>
    </Card>
    </div>
  )
}

export default UserAdd
