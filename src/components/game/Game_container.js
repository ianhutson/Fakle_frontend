import React from 'react'
import Board from './Board'
import Score from './Score'

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
