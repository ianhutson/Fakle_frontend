import React from 'react'
import RollDice from './RollDice'

function GameButtons() {
    return (
        <div className="buttons_container">
            <br></br>
            <RollDice/>
            <button className="game_buttons">Keep Selected</button>
            <button className="game_buttons">End Turn</button>
            
        </div>
    )
}

export default GameButtons
