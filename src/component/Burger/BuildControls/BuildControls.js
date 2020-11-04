import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'
function BuildControls(props) {
    const controls=[
        {label:'Salad',type:'salad'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
        {label:'Bacon',type:'bacon'},
    ]
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl=>{
                <BuildControl key={ctrl.label} label={ctrl.label}></BuildControl>
            })}
        </div>
    )
}

export default BuildControls
