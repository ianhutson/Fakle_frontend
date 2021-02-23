import React, { Component } from 'react';
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Header extends Component{

render(){
  return (     
      <div className='header'>
            <Logo/>
        <nav className='nav'>
            <Link className="nav_link" to="/rules">
                <div className='nav_buttons'>
                    Rules
                </div>
            </Link>
            <Link className="nav_link" to="/leaderboard">
                <div className='nav_buttons'>
                   Leaderboard
                </div>
            </Link>
            <Link className="nav_link" to="/about">
                <div className='nav_buttons'>
                   About
                </div>
            </Link>
        </nav>
        </div>
  )
}
}
export default connect()(Header);