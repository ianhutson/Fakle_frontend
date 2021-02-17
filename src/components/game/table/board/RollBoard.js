import Dice from '../DiceContainer'
import Title from './RollBoardTitle'
import React, { Component } from 'react';

class RollBoard extends Component {
    constructor(props){ 
      super(props) 
      this.con = this.con.bind(this)
      
    }

con(){
    console.log(this.state)
}

render (){
    return (
        <div className="rolling_board">
        <Title/>
        <div className="line"></div>
        <button onClick={this.con}> console log </button>
    </div>
    
    )
} 
}


export default RollBoard
