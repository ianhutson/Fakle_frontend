import React from 'react'
import Dice from '../DiceContainer'

function PlayerKeep() {
    return (
        <div>
             <div className="player_keep">
                <h5>Player Keep</h5>
                <Dice/>
                <h3>Keep Value - ##</h3>
            </div>
        </div>
    )
}

export default PlayerKeep
