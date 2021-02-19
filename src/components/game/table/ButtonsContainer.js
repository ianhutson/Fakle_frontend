import React, { Component } from 'react';
import { connect } from 'react-redux'


class ButtonsContainer extends Component {
    constructor(props) {
        super(props);
    };    

render(){
    const rollPhase = this.props.settings.rollPhase
    if (rollPhase === true) {
    return (
        <div>
            <button onClick={this.props.settings.settings.roll} className="game_buttons" >Roll Dice</button>
            <button onClick={this.props.settings.settings.end} className="game_buttons">End Turn</button>
        </div>
        )
    }
    else { return (
        <div>
 
        <button onClick={this.props.settings.settings.keep} className="game_buttons">Keep Selected</button> 
        <button onClick={this.props.settings.settings.end} className="game_buttons">End Turn</button>
        </div>
    )}}
}

export default connect()(ButtonsContainer)