import React,{ Component } from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <div>
                    <div>Burger</div>
                    <div> Build controls</div>
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder; 