import React from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'
import GameContainer from './game/table/GameContainer'
import PregameContainer from './game/pregame/PregameContainer'

function Home() {
    return (
        <div>
            <Header />
            <PregameContainer/>
            {/* <GameContainer/> */}
            <Footer /> 
        </div>
    )
}

export default Home
