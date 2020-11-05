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
    const [totalPrice, setTotalPrice] = useState(4);
    const IngredientsPrices = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
    }
    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCount;
        const price=IngredientsPrices[type];
        const oldPrice =totalPrice;
        const newPrice =oldPrice+price;
        setIngredients(updatedIngredients);
        setTotalPrice(newPrice)

    }
    return (
        <Aux>
            <div>
                <Burger ingredients={ingredients}></Burger>
                <BuildControls 
                ingredientsAdded={addIngredientHandler}></BuildControls>
            </div>
            <div>
            </div>
        </Aux>
    )
}
