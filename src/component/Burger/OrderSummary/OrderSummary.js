import React from 'react'
import Aux from '../../../hoc/Auxiliary';
function OrderSummary(props) {
    let ingredientsSummary=Object.keys(props.ingredients)
    .map(igKey=>{
    return (<li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>)
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
            {ingredientsSummary}
            </ul>
        </Aux>
    )
}

export default OrderSummary
