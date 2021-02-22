import React, { Component } from 'react';
import { connect } from 'react-redux'
import Score from './scoreboard/Score'
import PlayerKeep from './table/PlayerKeep'
import RollBoard from './table/RollBoard'
import ButtonsContainer from './table/ButtonsContainer'

class Game extends Component{
constructor(props) {
    super(props);
    
    }
    player(){ let x
        if (this.props.store.current_player === 1) x = this.props.store.p1
        else if(this.props.store.current_player === 2) x = this.props.store.p2
        else if(this.props.store.current_player === 3) x = this.props.store.p3
        else x = this.props.store.p4
        return x;
    }

    render()
    {
    return (
        <div className="game_container">
               <div>
            <div className="board_container">  
            {console.log(this.props)}
            <h4 > {this.player()}'s Turn!</h4>
            <h6 className="turn">TURN {this.props.store.current_turn} </h6>
            <br></br><br></br>
            <RollBoard store={this.props.store}/>
            <br></br>
            <PlayerKeep store={this.props.store}/>
            <ButtonsContainer store={this.props.store}/>
            </div>
        </div>
            <Score store={this.props.store}/>
        </div>
    )
    }
}

export default connect()(Game)