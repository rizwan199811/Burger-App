import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from '../../../component/Burger/BuildControls/BuildControl/BuildControl'
function BuildControls(props) {
    const controls=[
        {label:'Salad',type:'salad'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
        {label:'Bacon',type:'bacon'},
    ]
    //console.log(props.disabledInfo)
    return (
        <div className={classes.BuildControls}>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>{
                {console.log(props.disabledInfo[ctrl.type])}
                return <BuildControl key={ctrl.label} label={ctrl.label} added={()=>props.addIngredient(ctrl.type)} removed={()=>props.removeIngredients(ctrl.type)} disableInfo={props.disabledInfo[ctrl.type]}></BuildControl>
            })}
        </div>
    )
}

export default BuildControls
