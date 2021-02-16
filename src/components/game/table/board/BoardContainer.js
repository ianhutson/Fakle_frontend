import React, { Component } from 'react'
import PlayerKeep from './PlayerKeep'
import RollBoard from './RollBoard'
import ButtonsContainer from './ButtonsContainer'

class Board extends Component {  
    constructor(props) {
        super(props);
        this.state = {         
          }
        }
        player(){ let x
            if (this.props.game.current_player === 1) x = this.props.game.settings.p1
            else if(this.props.game.current_player === 2) x = this.props.game.settings.p2
            else if(this.props.game.current_player === 3) x = this.props.game.settings.p3
            else x = this.props.game.settings.p4
            return x;
        }
          
    render(){
    return (
        <div>
            <div className="board_container">  
            <h4 > {

            this.player()
            
            }'s Turn!</h4>
            <h6 className="turn">TURN {this.props.game.current_turn} </h6>
            <br></br><br></br>
            <RollBoard game={this.props}/>
            <br></br>
            <PlayerKeep game={this.props}/>
            <ButtonsContainer game={this.props}/>
        </div>
    </div>
    )
}
}
export default Board
