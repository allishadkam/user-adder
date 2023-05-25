import React from 'react'
import ReactDOM  from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from '../UI/ErrorModal.module.css'

const Backdrop =props=>{
    return <div className={classes.backdrop} onClick={props.onconfirm}/>
}
const Modaloverlay=props=>{
    return(<Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onconfirm}>Okay</Button>
      </footer>
    </Card>)
    
}


const ErrorModal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onconfirm={props.onconfirm}/>,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<Modaloverlay onconfirm={props.onconfirm} title={props.title} message={props.message}/>,document.getElementById('modal-root'))}
    </React.Fragment>
    
  )
}

export default ErrorModal
