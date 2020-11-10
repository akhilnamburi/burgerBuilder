import React,{Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
        
            return (<li key={ingKey}><span style={{textTransform:'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}</li>);
        });
         
        return(
        <Aux>
            <p>Your Order</p>
            <p>Burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}$</strong></p>
            <p> Continue to Checkout</p>
            <Button btnType='Danger' clicked = {this.props.purchaseCancel}>Cancel</Button>
            <Button btnType='Success' clicked = {this.props.purchaseContinue}>Continue</Button>
        </Aux>
        ); 
    }
}

export default OrderSummary;