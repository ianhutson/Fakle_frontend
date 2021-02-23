import React, { Component } from 'react';
import { connect } from 'react-redux'


class ButtonsContainer extends Component {
render(){
    const rollPhase = this.props.store.rollPhase
    if(this.props.store.fakle === true)
    return (<div>
                <div className="fakle_noto">You Fakled!</div>
                <button onClick={this.props.store.end} className="game_buttons">End Turn</button>
            </div>)
    else if (rollPhase === true && this.props.store.fakle === false) {
    return (
        <div>
            <button onClick={this.props.store.roll} className="game_buttons" >Roll Dice ({this.props.store.rollable_dice})</button>
            <button onClick={this.props.store.end} className="game_buttons">End Turn</button>
        </div>
        )
    }
    else { return (
        <div>
 
        <button onClick={this.props.store.keep} className="game_buttons">Keep Selected</button> 
        <button onClick={this.props.store.end} className="game_buttons">End Turn</button>
        </div>
    )}}
}

export default connect()(ButtonsContainer)