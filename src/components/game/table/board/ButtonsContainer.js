import React, { Component } from 'react';
import { connect } from 'react-redux'

class GameButtons extends Component {

    constructor(props) {
        super(props);
};    




render(){
    return (
        <div>
            <button onClick={this.props.settings.settings.roll} className="game_buttons" >Roll Dice</button>
            <button onClick={this.props.keep} className="game_buttons">Keep Selected</button> 
            <button onClick={this.props.end} className="game_buttons">End Turn</button>
        </div>
    )
}
}



export default connect()(GameButtons)