import React from 'react'
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

function OrderSummary(props) {
    let ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey} > <span style={
                { textTransform: 'capitalize' }} > {igKey} </span> : {props.ingredients[igKey]}</li >)
        })
    return (<Aux >
        <h3 > Your Order </h3>
        <p> A delicious burger with following ingredients </p>
        <ul> {ingredientsSummary} </ul>
        <p><strong>Total Price:{props.price}</strong></p>
        <p > Checkout ? </p>
        <Button click={props.cancelOrder} btnType='Danger'>Cancel </Button>
        <Button click={props.continuePurchase} btnType='Success'> Continue </Button>
    </Aux>
    )
}

export default OrderSummary