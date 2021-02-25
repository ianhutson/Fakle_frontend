import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HomeButton from '../HomeButton'

function About() {
  return (
    <div>
    <Header/>
<div className="pregame_container" style={{height: 'fit-content', width:'fit-content', fontFamily: 'sans-serif'}}>
<h1>This app was developed with React as a portfolio project for Flatiron School by Ian Hutson in 2021.</h1>
<br></br>
<h1>Click "Rules" to learn how to play, or return to game.</h1>
    <br></br>
    <HomeButton style={{}}/>
</div>
    <Footer/>
</div>
  )
}

export default About
