import React from 'react'
import Board from './board/BoardContainer'
import Score from '../scoreboard/Score'

function Game_container() {
    return (
        <div className="game_container">
            <br></br>
            <Board />
            <Score />
    </div>
    )
}

export default Game_container
