import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeButton() {
    return (
        <div >
            <NavLink className="game_buttons" to="/">
                    Back to game!
            </NavLink>
        </div>
    )
}

export default HomeButton
