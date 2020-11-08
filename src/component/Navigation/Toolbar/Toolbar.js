import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggler from '../../SideDrawer/DrawerToggler/DrawerToggler'
import classes from './Toolbar.module.css'
function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggler clicked={props.drawerTogglerClick}></DrawerToggler>
            <Logo height='80%'></Logo>
            <nav className={classes.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    )
}

export default Toolbar
