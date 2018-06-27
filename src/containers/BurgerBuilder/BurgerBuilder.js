import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...
  //   }
  //
  //}
  state = {
    ingredients: {
      salad: 2,
      bacon: 4,
      cheese: 2,
      meat: 3,
    }
  }
  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />

      </Aux>
    );
  }
}

export default BurgerBuilder;
