import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
            <nav className='nav'>
            <div className='nav__card'>
                <NavLink className='nav__link' to="/players">
                    <div className='nav__content'>
                        <h2 className='heading-tertiary'>Players</h2>
                    </div>
                </NavLink>
            </div>
            <div className='nav__card'>
                <NavLink className='nav__link' to="/rules">
                    <div className='nav__content'>
                        <h2 className='heading-tertiary'>Rules</h2>
                    </div>
                </NavLink>
            </div>
            <div className='nav__card'>
                <NavLink className='nav__link' to="/leaderboard">
                    <div className='nav__content'>
                        <h2 className='heading-tertiary'>Leaderboard</h2>
                    </div>
                </NavLink>
            </div>
            </nav>
    )
}

export default Nav