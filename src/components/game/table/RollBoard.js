import Dice from './DiceContainer'
import React, { Component } from 'react';
import { connect } from 'react-redux'

class RollBoard extends Component {
    constructor(props){ 
      super(props) 
    }

render (){
    return (
        <div className="rolling_board">
        <div >
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/roll.png"}/>
        </div>
        <div className="line"></div>
        <div className>
            <Dice settings={this.props}/>
        </div>
    </div>)
    } 
}


export default connect()(RollBoard)
