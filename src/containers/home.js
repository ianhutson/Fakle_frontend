import React from 'react'
import Header from '../components/structural/Header'
import Footer from '../components/structural/Footer'
import Game from '../components/game/Game_container'
import SelectPlayersNumber from '../components/game/select_players_number'
import SelectPlayersNames from '../components/game/select_players_names'

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