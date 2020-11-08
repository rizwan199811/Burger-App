import React from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

function Modal(props) {
    // console.log(props.Modalclosed)
    return (
        <Aux>

            <Backdrop show={props.show} closed={props.Modalclosed}></Backdrop>
        <div className={classes.Modal} style={{ transform: props.show ? 'translateY(0)' : 'translateY(-200vh)' }
            , { opacity: props.show ? '1' : '0' }}>
            {props.children}
        </div>
        </Aux>
    )
}

export default Modal
