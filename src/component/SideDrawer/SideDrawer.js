import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css'
import Aux from '../../hoc/Auxiliary'

function SideDrawer(props) {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    console.log(props.open)
    return (
        <Aux>
        <Backdrop clicked={props.closed} show={props.open} ></Backdrop>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </div>
        </Aux>
    )
}

export default SideDrawer
