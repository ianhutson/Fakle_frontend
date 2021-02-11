import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import Pregame from './pregame/PregameContainer'

const Game = () => {
    return (
        <div className='home'>
            <Header />
            <Pregame/>
            <Footer /> 
            
        </div>
    )
}

export default Game