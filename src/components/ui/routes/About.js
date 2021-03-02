import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HomeButton from '../HomeButton'

function About() {
  return (
    <div>
    <Header/>
<div className="pregame_container" style={{height: 'fit-content', width:'50%', fontFamily: 'sans-serif', fontSize: '10px'}}>
<h1 style={{textAlign:'left'}}>This app is a 'Farkle' clone developed with React as a portfolio project for Flatiron School by Ian Hutson in 2021. It was created to demonstrate the understaing and ability to use React, Redux, JavaScript ES6, Rails API, asynchronous actions, data persistence to a database, CSS, HTML, and client-side routing.</h1>
<br></br><br></br>
<h1 style={{textAlign:'left'}}>Click "Rules" to learn how to play, or return to game.</h1>
    <br></br>
    <HomeButton style={{}}/>
</div>
    <Footer/>
</div>
  )
}

export default About
