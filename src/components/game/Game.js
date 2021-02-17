import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from './table/board/BoardContainer'
import Score from './scoreboard/Score'
import { keep } from  './actions/keep';
import { roll } from  './actions/roll';
import { end } from  './actions/end';

class Game extends Component{
constructor(props) {
    super(props);
    this.state = {
        }
    }
    render() {
    return (
        <div className="game_container">
                <Board  game={this.props} />
                <Score settings={this.props.settings}/>
            </div>
    )
    }
}

    // const mapStateToProps = state => ({p1_score: 0,
    //     p2_score: 0, 
    //     p3_score: 0, 
    //     p4_score: 0, 
    //     current_player: 1,
    //     current_turn: 1,
    //     keep_value: 0,
    //     rollable_dice: 6,
    //     rolled_dice: [],
    //     kept_dice: [],
    //     selected_value: 0,
    // })


    const mapDispatchToProps = dispatch => {
        return {
            roll: () => {
                dispatch(roll())},
            keep: () => {
                dispatch(keep())},
            end: () => {
                dispatch(end())},
            }
        }
    

    
    export default connect(null, mapDispatchToProps)(Game)