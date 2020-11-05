import React, { useState } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import Modal from '../../component/UI/Modal/Modal'
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary'


export default function BurgerBuilder(props) {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })
    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasable, setPurchasable] = useState({
        purchasable: false
    });
    const [purchasing, setPurchasing] = useState(false);
    const IngredientsPrices = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
    }
    const disabledInfo = {
        ...ingredients
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <=0;
    }
    console.log(disabledInfo)
    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCount;
        const price = IngredientsPrices[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + price;
        setIngredients(updatedIngredients);
        setTotalPrice(newPrice)
        updatePurchaseState(updatedIngredients)

    }
    const removeIngredient = (type) => {
        const oldCount = ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...ingredients
        }
        updatedIngredients[type] = updatedCount;
        const price = IngredientsPrices[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - price;
        setIngredients(updatedIngredients);
        setTotalPrice(newPrice)
        updatePurchaseState(updatedIngredients)
    }

    const updatePurchaseState = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients)
            .map(igKey => {
                return updatedIngredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        setPurchasable({
            purchasable: sum > 0
        })
    }
    const purchaseHandler = () => {
        setPurchasing(true);
    }
    return (
        <Aux> 
            <Modal show={purchasing}>
            <OrderSummary ingredients={ingredients}></OrderSummary>
            </Modal>
            <Burger ingredients={ingredients} ></Burger>
            <BuildControls
                addIngredient={addIngredientHandler} removeIngredients={removeIngredient}
                disabledInfo={disabledInfo} price={totalPrice} purchasable={purchasable.purchasable} ordered={purchaseHandler}>
            </BuildControls>

        </Aux>
    )
}
