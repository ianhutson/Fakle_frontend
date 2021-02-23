import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton() {
    return (
        <div >
            <Link className="game_buttons" to="/">
                    Back to game!
            </Link>
        </div>
    )
}

export default HomeButton
