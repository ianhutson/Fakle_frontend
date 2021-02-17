import React from 'react'
import Dice from '../DiceContainer'
import Title from './KeepTitle'
import Value from './ValueTitle'
function PlayerKeep() {
    return (
        <div>
             <div className="player_keep">
                <Title/>
                <div className="line"></div>
                <div className="keep_container"></div>
                <div className="line"></div>
                <br></br>
                <Value/>
                <div className="value_container">
                <div className="keep_value">150</div>
                </div>
            </div>
        </div>
    )
}

export default PlayerKeep
