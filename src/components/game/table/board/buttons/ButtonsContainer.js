import React from 'react'
import Keep from './KeepSelected'
import End from './EndTurn'
import Roll from './RollDice'

function GameButtons() {
    return (
        <div className="buttons_container">
    
            <Roll/>
            <Keep/>
            <End/>
            
        </div>
    )
}

export default GameButtons
