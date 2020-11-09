import React, { useState } from 'react'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './Layout.module.css'

export default function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(false)
    const closedDrawerHandler = () => {
        return setShowSideDrawer(false);
    }
    const SideDrawerToggleHandler = () => {
    const abc =  setShowSideDrawer((prevState)=>{
        console.log(prevState);
          return !prevState.showSideDrawer
        })
        console.log(abc);
    }
    return (
        <Aux>
            <Toolbar clicked={SideDrawerToggleHandler}></Toolbar>
            <SideDrawer closed={closedDrawerHandler} open={showSideDrawer}></SideDrawer>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}
