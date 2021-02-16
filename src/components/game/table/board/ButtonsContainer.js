import React, { Component } from 'react';


class GameButtons extends Component {

    constructor(props) {
        super(props);
};    




render(){
    return (
        <div>
            <button onClick={this.props.game.game.roll} className="game_buttons" >Roll Dice</button>
            <button onClick={this.props.game.game.keep} className="game_buttons">Keep Selected</button> 
            <button onClick={this.props.game.game.end} className="game_buttons">End Turn</button>
           
        </div>
    )
}
}

export default GameButtons
