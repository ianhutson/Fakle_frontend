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
        if (this.props.current_player === 1) x = this.props.settings.p1
        else if(this.props.current_player === 2) x = this.props.settings.p2
        else if(this.props.current_player === 3) x = this.props.settings.p3
        else x = this.props.settings.p4
        return x;
    }

    render()
    {
    return (
        <div className="game_container">
               <div>
            <div className="board_container">  
            <h4 > {this.player()}'s Turn!</h4>
            <h6 className="turn">TURN {this.props.current_turn} </h6>
            <br></br><br></br>
            <RollBoard settings={this.props}/>
            <br></br>
            <PlayerKeep settings={this.props}/>
            <ButtonsContainer settings={this.props}/>
            </div>
        </div>
            <Score settings={this.props.settings}/>
        </div>
    )
    }
}

    const mapStateToProps = state => ({p1_score: state.p1_score,
        p2_score: state.p2_score, 
        p3_score: state.p3_score, 
        p4_score: state.p4_score, 
        current_player: state.current_player,
        current_turn: state.current_turn,
        keep_value: state.keep_value,
        rollable_dice: state.rollable_dice,
        rolled_dice: state.rolled_dice,
        kept_dice: state.kept_dice,
        selected_value: state.selected_value,
        firstRollThrown: state.firstRollThrown,
        oneSelected: state.oneSelected,
        twoSelected: state.twoSelected,
        threeSelected: state.threeSelected,
        fourSelected: state.fourSelected,
        fiveSelected: state.fiveSelected,
        sixSelected: state.sixSelected,
        selection_array: state.selection_array
    })


    

    
    export default connect(mapStateToProps)(Game)