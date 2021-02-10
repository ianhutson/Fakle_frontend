import React from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Game from '../components/game/table/GameContainer'
import SelectPlayersNumber from '../components/game/pregame/PlayerNumber'
import SelectPlayersNames from '../components/game/pregame/PlayerNames'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Game />
            <Footer />
        </div>
    )
}

export default Home