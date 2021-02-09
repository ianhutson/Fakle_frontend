import React from 'react'
import PlayerKeep from './player_keep'
import RollBoard from './roll_board'
import GameButtons from './game_buttons'

function Board() {
    return (
        <div>
            <div className="board_container">  
            <h1>(Current Player)'s Turn!</h1>
            <h3>Turn (Current Turn #)</h3>
            <RollBoard/>
            <br></br>
            <PlayerKeep/>
            <GameButtons />
        </div>
    </div>
    )
}

export default Board
