import React from 'react'
import BurgerLogo from '../../assets/Images/burger-logo.png';
import classes from "./Logo.module.css";
function Logo(props) {
    return (
        <div className={classes.Logo} style={{height:props.height}}>
            <img src={BurgerLogo}></img> 
        </div>
    )
}

export default Logo
