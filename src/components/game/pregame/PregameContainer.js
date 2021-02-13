import React, { Component } from 'react'
import { connect } from 'react-redux'
import PregameInput from './PregameInput'
import GameContainer from '../table/GameContainer'
class PregameContainer extends Component {
   render(){
    return (
        <div className="pregame_container">
            <PregameInput managePregame={this.props.managePregame}/>
            {this.props.isSubmitted && <GameContainer />}
        </div>
        )
    }
}



const mapStateToProps = state => ({ num_of_players: state.num_of_players, names: state.names })

const mapDispatchToProps = dispatch => ({
  managePregame: pregame => dispatch({type: 'SUBMIT', pregame}),
})

export default connect(mapStateToProps, mapDispatchToProps)(PregameContainer)
