import React, { Component } from 'react'
import Board from './board/BoardContainer'
import Score from '../scoreboard/Score'

class Game_container extends Component {  
    
constructor(props) {
    super(props);
      }
render(){
    return (
        <div className="game_container">
            <Board settings={this.props.settings}/>
            <Score settings={this.props.settings}/>
    </div>
    )
}
}

export default Game_container
