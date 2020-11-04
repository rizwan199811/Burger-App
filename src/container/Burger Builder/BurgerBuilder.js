import React, { useState } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
export default function BurgerBuilder() {
    const [ingredients, setIngredients] = useState({
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
    })
    return (
        <Aux>
            <div>
                <Burger ingredients={ingredients}></Burger>
                <BuildControls></BuildControls>
            </div>
            <div>
        </div>
        </Aux>
    )
}
