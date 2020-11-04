import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient type={igKey} key={i + igKey}></BurgerIngredient>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        })
    if(transformedIngredients.length<=0){
        transformedIngredients=<div>Please Start Adding Ingredients</div>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default Burger
