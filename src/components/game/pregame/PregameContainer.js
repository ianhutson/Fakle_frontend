import React, { Component } from 'react'
import PregameInput from './PregameInput'
import Game from '../Game'
import { connect } from 'react-redux'

class PregameContainer extends Component {
   render(){
    return (
        <div className="pregame_container">
            <PregameInput addPregame={this.props.addPregame}/>
            <Game settings={this.props.settings}/>
        </div>
        )
    }
}

const mapStateToProps = ({ settings }) => ({ settings })

const mapDispatchToProps = dispatch => ({ addPregame: pregame => dispatch({ type: "SUBMIT", pregame }) })

export default connect(mapStateToProps, mapDispatchToProps)(PregameContainer)