import Dice from './DiceContainer'
import Title from './RollBoardTitle'
import React, { Component } from 'react';
import { connect } from 'react-redux'

class RollBoard extends Component {
    constructor(props){ 
      super(props) 
    }

render (){
    return (
        <div className="rolling_board">
        <Title/>
        <div className="line"></div>
        <div className>
            <Dice settings={this.props}/>
        </div>
    </div>)
    } 
}


export default connect()(RollBoard)
