import React, { Component } from 'react';
import { connect } from 'react-redux'
import Score from './table/Score'
import PlayerKeep from './table/PlayerKeep'
import RollBoard from './table/RollBoard'
import ButtonsContainer from './table/ButtonsContainer'

class Game extends Component{
    render()
    {
    return (
        <div className="game_container">
            <div className="board_container">  
            <h4 style={{color: this.props.store.players[this.props.store.current_player - 1].color}}> {this.props.store.players[this.props.store.current_player - 1].name}'s Turn!</h4>
            <h6 className="turn">TURN {this.props.store.current_turn} </h6>
            <br></br><br></br>
            <RollBoard store={this.props.store}/>
            <br></br>
            <PlayerKeep store={this.props.store}/>
            <ButtonsContainer store={this.props.store}/>
            <Score store={this.props.store}/>
        </div>
        </div>
    )
    }
}

export default connect()(Game)