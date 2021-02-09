import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Game from '../components/game'
import SelectPlayersNumber from '../components/select_players_number'
import SelectPlayersNames from '../components/select_players_names'

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