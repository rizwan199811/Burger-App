import React from 'react'
import Logo from '../../Logo/Logo'
import DrawerToggler from '../../SideDrawer/DrawerToggler/DrawerToggler'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'
function Toolbar(props) {
    console.log(props.clicked)
    return (
        <header className={classes.Toolbar}>
            <DrawerToggler click={props.clicked}></DrawerToggler>
            <Backdrop show={!props.clicked} ></Backdrop>
            <Logo height='80%'></Logo>
            <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default Toolbar
