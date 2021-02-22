import React, { Component } from 'react';
import { connect } from 'react-redux'


class ButtonsContainer extends Component {
    constructor(props) {
        super(props);
    };    

render(){
    const rollPhase = this.props.settings.rollPhase
    if(this.props.settings.fakle === true)
    return (<div>
                <h1>You Fakled!</h1>
                <button onClick={this.props.settings.settings.end} className="game_buttons">End Turn</button>
            </div>)
    else if (rollPhase === true && this.props.settings.fakle === false) {
    return (
        <div>
            <button onClick={this.props.settings.settings.roll} className="game_buttons" >Roll Dice ({this.props.settings.rollable_dice})</button>
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