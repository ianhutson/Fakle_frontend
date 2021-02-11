import React from 'react'
import Dice from '../DiceContainer'
import Title from './KeepTitle'
import Value from './ValueTitle'
function PlayerKeep() {
    return (
        <div>
             <div className="player_keep">
                <Title/>
                <Dice/>
                <Value/>
                <p>150</p>
            </div>
        </div>
    )
}

export default PlayerKeep
