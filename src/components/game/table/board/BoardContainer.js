import React from 'react'
import PlayerKeep from './PlayerKeep'
import RollBoard from './RollBoard'
import ButtonsContainer from './buttons/ButtonsContainer'


function Board() {
    return (
        <div>
            <div className="board_container">  
            <h1>(Current Player)'s Turn!</h1>
            <h3>Turn (Current Turn #)</h3>
            <RollBoard/>
            <br></br>
            <PlayerKeep/>
            <ButtonsContainer />
        </div>
    </div>
    )
}

export default Board
