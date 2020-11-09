import React from 'react'
import classes from './DrawerToggle.module.css'

function DrawerToggler(props) {
    console.log(props.click);
    return (
        <div onClick={props.click} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggler
