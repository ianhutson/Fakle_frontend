import React from "react";
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <div className='header'>
            <Logo/>
        <nav className='nav'>
        <div className='nav__card'>
            <NavLink className='nav__link' to="/rules">
                <div className='nav__content'>
                    Rules
                </div>
            </NavLink>
        </div>
        <div className='nav__card'>
            <NavLink className='nav__link' to="/leaderboard">
                <div className='nav__content'>
                   Leaderboard
                </div>
            </NavLink>
        </div>
        <div className='nav__card'>
            <NavLink className='nav__link' to="/players">
                <div className='nav__content'>
                   Edit Players
                </div>
            </NavLink>
        </div>
        </nav>
        </div>
  )
}

export default Header;