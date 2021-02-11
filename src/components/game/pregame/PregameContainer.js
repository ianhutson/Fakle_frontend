import React, { Component } from 'react'
import PregameNumberInput from './PregameNumberInput'
import PregameNameInput from './PregameNameInput'
import Game from '../Game'
import { connect } from 'react-redux'

class PregameContainer extends Component {
   render(){
    return (
        <div className="pregame_container">
            <PregameNumberInput addPregame={this.props.addPregame}/>
            <PregameNameInput settings={this.props.settings}/>
        </div>
        )
    }
}

const mapStateToProps = ({ settings }) => ({ settings })

const mapDispatchToProps = dispatch => ({ addPregame: pregame => dispatch({ type: "SUBMIT", pregame }) })

export default connect(mapStateToProps, mapDispatchToProps)(PregameContainer)