import classes from '*.module.css'
import React from 'react'
import classes from './Backdrop.module.css'
function Backdrop(props) {
    props.show ? <div className={classes.Backdrop}></div>
}

export default Backdrop

