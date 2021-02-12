import React, { Component } from 'react'
import { connect } from 'react-redux'
import PregameInput from './PregameInput'

class PregameContainer extends Component {
   render(){
    return (
        <div className="pregame_container">
            <PregameInput/>
        </div>
        )
    }
}


export default PregameContainer