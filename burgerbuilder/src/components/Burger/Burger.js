import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props)=>{
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map(( _,i)=> {
                return <BurgerIngredient key={igKey+i} type={igKey} />
            });
        }).reduce((acc,val)=> {
            return acc.concat(val);
            
        }, []);
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Add your ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='breadTop'/>
            {transformedIngredients}
            <BurgerIngredient type='breadBottom'/>
        </div>
    );
};

export default burger;