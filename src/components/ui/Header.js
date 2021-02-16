import React from "react";
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <div className='header'>
            <Logo/>
        <nav className='nav'>
            <NavLink className="nav_link" to="/rules">
                <div className='nav_buttons'>
                    Rules
                </div>
            </NavLink>
            <NavLink className="nav_link" to="/leaderboard">
                <div className='nav_buttons'>
                   Leaderboard
                </div>
            </NavLink>
            <NavLink className="nav_link" to="/players">
                <div className='nav_buttons'>
                   Edit Players
                </div>
            </NavLink>
        </nav>
        </div>
  )
}

export default Header;