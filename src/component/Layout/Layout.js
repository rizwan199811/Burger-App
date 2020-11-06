import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import classes from './Layout.module.css'
export default function Layout(props) {
    return (
        <Aux>
            <Toolbar></Toolbar>
            <SideDrawer></SideDrawer>
        <main className={classes.content}>
            { props.children }
        </main>
        </Aux>
    )
}
