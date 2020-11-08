import React,{useState} from 'react'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './Layout.module.css'

export default function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(true)
    const closedDrawerHandler = ()=>{
        setShowSideDrawer(false);
    }
    const SideDrawerToggleHandler = ()=>{
        setShowSideDrawer((prevState)=>{
            return !prevState.showSideDrawer
        });
    }
    return (
        <Aux>
            <Toolbar drawerTogglerClick={SideDrawerToggleHandler}></Toolbar>
            <SideDrawer closed={closedDrawerHandler} open={showSideDrawer}></SideDrawer>
        <main className={classes.content}>
            { props.children } 
        </main>
        </Aux>
    )
}
