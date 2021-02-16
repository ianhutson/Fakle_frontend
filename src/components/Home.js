import React from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'
import PregameContainer from './game/pregame/PregameContainer'

function Home() {
    return (
        <div>
            <Header />
            <PregameContainer/>
            <Footer /> 
        </div>
    )
}

export default Home
