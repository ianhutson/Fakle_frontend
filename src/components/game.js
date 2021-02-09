import React from 'react'
import Board from './board'
import Score from './score'

function Game() {
    return (
        <div className="game_container">
            <br></br>
            <Board />
            <Score />
    </div>
    )
}

export default Game
