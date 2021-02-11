import React from 'react'
import PlayerKeep from './PlayerKeep'
import RollBoard from './RollBoard'
import ButtonsContainer from './buttons/ButtonsContainer'


function Board() {
    return (
        <div>
            <div className="board_container">  
            <h2>Player 1's Turn!</h2>
            <h6>TURN 1</h6>
            <RollBoard/>
            <br></br>
            <PlayerKeep/>
            <ButtonsContainer />
        </div>
    </div>
    )
}

export default Board
