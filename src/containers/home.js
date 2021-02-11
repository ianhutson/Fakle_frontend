import React from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Game from '../components/game/table/GameContainer'
import Pregame from '../components/game/pregame/PregameContainer'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            {/* <Pregame/> */}
            <Game />
            <Footer /> 
            
        </div>
    )
}

export default Home