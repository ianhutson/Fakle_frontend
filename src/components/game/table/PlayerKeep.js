import React from 'react'

function PlayerKeep() {
    return (
        <div>
             <div className="player_keep">
             <div>
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/keep.png"}/>
            </div>
                <div className="line"></div>
                <div className="keep_container"></div>
                <div className="line"></div>
                <br></br>
                <div>
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/value.png"}/>
        </div>
                <div className="value_container">
                <div className="value">0</div>
                </div>
            </div>
        </div>
    )
}

export default PlayerKeep
