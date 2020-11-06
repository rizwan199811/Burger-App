import React from 'react'
import BurgerLogo from '../../assets/Images/burger-logo.png';
import classes from "./Logo.module.css";
function Logo() {
    return (
        <div className={classes.Logo}>
            <img src={BurgerLogo}></img> 
        </div>
    )
}

export default Logo
