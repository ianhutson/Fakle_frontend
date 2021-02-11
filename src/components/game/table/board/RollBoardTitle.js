import React from 'react'

function RollBoardTitle() {
    return (
        <div >
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/roll.png"}/>
        </div>
    )
}

export default RollBoardTitle