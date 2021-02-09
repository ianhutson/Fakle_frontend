import React from "react";
import Logo from '../images/fuggle_logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <div className='header'>
            <img src={Logo} className="logo"></img>
        <nav className='nav'>
        <div className='nav__card'>
            <NavLink className='nav__link' to="/players">
                <div className='nav__content'>
                   Players
                </div>
            </NavLink>
        </div>
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
        </nav>
        </div>

  )
}

export default Header;