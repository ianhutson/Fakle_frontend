import React from 'react'
import Dice from '../DiceContainer'
import Title from './RollBoardTitle'

function RollBoard() {
    return (
        <div className="rolling_board">
        <Title/>
        <Dice/>
    </div>
    )
}

export default RollBoard
