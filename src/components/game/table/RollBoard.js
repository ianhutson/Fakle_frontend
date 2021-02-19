import RollableDice from './RollableDice'
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
        <div className="diceContainer">
        {this.props.settings.rollThrown === true && <RollableDice settings={this.props}/>} </div>
        <div className="select_value_container">
   
        <div className="value">{this.props.settings.selected_value}</div>

        </div>
    </div>)
    } 
}


export default connect()(RollBoard)
