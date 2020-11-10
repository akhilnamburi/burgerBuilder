import React,{ Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary' 
import orderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad:0.50,
    cheese:0.50,
    meat:1.0,
    bacon:1.0       
};
class BurgerBuilder extends Component{
    
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }, 
        totalPrice:4,
        purchasable: false,
        purchasing: false
    }

    updatePurchase(ingredients){
        const sum= Object.keys(ingredients).map(ingKey =>{
             return ingredients[ingKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable: sum>0});
    }

    addIngredient = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount =oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        } 
        updatedIngredients[type] = updatedCount ;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+ priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchase(updatedIngredients);
    }

    removeIngredient = (type)=>{
        if (this.state.ingredients[type]!==0){
            const oldCount = this.state.ingredients[type];
            const updatedCount =oldCount-1;
            const updatedIngredients={
                ...this.state.ingredients
            } 
            updatedIngredients[type] = updatedCount ;
            const priceDeduction = INGREDIENT_PRICE[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
            this.updatePurchase(updatedIngredients);
        }
        
    }

    purchase = ()=>{
        this.setState({purchasing: true});
    }

    purchaseCancel = ()=>{
        this.setState({purchasing: false});
    }

    purchaseContinue = ()=>{
        alert('continue');
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key]<=0; 
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    totalPrice = {this.state.totalPrice}
                    purchaseCancel = {this.purchaseCancel}
                    purchaseContinue = {this.purchaseContinue}/>
                </Modal>
                <div>
                    <Burger ingredients = {this.state.ingredients}/>
                    <BuildControls
                    ingredientAdded={this.addIngredient} 
                    ingredientRemoved = {this.removeIngredient} 
                    disabled = {disableInfo}
                    purchasable={this.state.purchasable}
                    purchasing = {this.purchase}
                    totalPrice = {this.state.totalPrice}/>
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder; 