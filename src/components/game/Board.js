import React from 'react'
import PlayerKeep from './Player_keep'
import RollBoard from './Roll_board'
import GameButtons from './Game_buttons'
import Die from './RollDice'

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
