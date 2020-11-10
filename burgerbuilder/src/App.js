import React,{ Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Aux from './hoc/Aux';
class App extends Component{
  render(){
    return (
      <Aux>
        <div>
          <Layout>
            <BurgerBuilder/>
          </Layout>
        </div>
      </Aux>
    );
  };
}


export default App;
