import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const burger = (props)=>{
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='breadTop'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='breadBottom'/>
        </div>
    );
};

export default burger;