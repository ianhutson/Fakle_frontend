import React, { Component } from 'react'
import PlayerKeep from './PlayerKeep'
import RollBoard from './RollBoard'
import ButtonsContainer from './buttons/ButtonsContainer'

class Board extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            p1_score: 0,
            p2_score: 0, 
            p3_score: 0, 
            p4_score: 0, 
            current_player: this.props.settings.p1,
            current_turn: 1,
            keep_value: 0,
            rollable_dice: 6,
            kept_dice: [],
          }
          }
    render(){
    console.log(this.state.current_player)
    return (
        <div>
            <div className="board_container">  
            <h4 > {this.state.current_player}'s Turn!</h4>
            <h6 className="turn">TURN {this.state.current_turn} </h6>
            <br></br><br></br>
            <RollBoard/>
            <br></br>
            <PlayerKeep/>
            <ButtonsContainer />
        </div>
    </div>
    )
}
}
export default Board
