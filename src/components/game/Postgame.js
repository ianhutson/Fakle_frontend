import React, { Component } from 'react';
import { connect } from 'react-redux'


class Postgame extends Component {
    render(){
    return (
        <div>
        <div className="pregame_container" style={{height: 'fit-content'}}>
            <h1>Game Over!</h1>
            {console.log(this)}
            <h1 style={{color: this.props.store.winner.color}}>{this.props.store.winner.name} Won!</h1>
        <br></br>
            <button className="game_buttons" onClick={() => window.location.reload(false)}>New Game</button>
        </div>
        </div>)
    }
}

export default connect() (Postgame)