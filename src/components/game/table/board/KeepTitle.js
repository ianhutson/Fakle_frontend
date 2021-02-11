import React from 'react'

function KeepTitle() {
    return (
        <div>
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/keep.png"}/>
        </div>
    )
}

export default KeepTitle
