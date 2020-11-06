import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
function SideDrawer(props) {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo></Logo>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
    )
}

export default SideDrawer
