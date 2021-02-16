import Dice from '../DiceContainer'
import Title from './RollBoardTitle'
import React, { Component } from 'react';

class RollBoard extends Component {
    constructor(props){ 
      super(props) 
    }


render (){
    return (
        <div className="rolling_board">
        <Title/>
        <div className="line"></div>
        <p> </p>
    </div>
    
    )
} 
}

export default RollBoard
