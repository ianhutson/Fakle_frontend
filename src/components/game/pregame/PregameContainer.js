import React, { Component } from 'react'
import { connect } from 'react-redux'
import PregameInput from './PregameInput'
import GameContainer from '../table/GameContainer'
class PregameContainer extends Component {
   render(){
    return (
        <div>
        
            {this.props.isSubmitted === false && <PregameInput managePregame={this.props.managePregame}/>}

            {this.props.isSubmitted && <GameContainer settings={this.props}/>}
        </div>
        )
    }
}



const mapStateToProps = state => ({ num_of_players: state.num_of_players, p1: state.p1, p2: state.p2, p3: state.p3, p4: state.p4, isSubmitted: state.isSubmitted })

const mapDispatchToProps = dispatch => ({
  managePregame: pregame => dispatch({type: 'SUBMIT', pregame}),
})

export default connect(mapStateToProps, mapDispatchToProps)(PregameContainer)
