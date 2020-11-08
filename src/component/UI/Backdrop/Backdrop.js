
import React from 'react'
import classes from './Backdrop.module.css'

function Backdrop(props) {
    console.log(props.clicked)
    return(

    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div>:null
    )
}

export default Backdrop

