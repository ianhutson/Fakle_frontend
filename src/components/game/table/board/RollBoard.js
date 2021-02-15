import Dice from '../DiceContainer'
import Title from './RollBoardTitle'
import React, { Component } from 'react';

class RollBoard extends Component {
    constructor(props){ 
      super(props) 
  
    this.state = {
    }
    }
    
handleClick(event) {
    this.setState({
      
    },
     () => {
      console.log(this)
    })
  }

render (){
    return (
        <div onClick={(event)=> this.handleClick(event)} className="rolling_board">
        <Title/>
        <Dice />
    </div>
    )
}
}

export default RollBoard
