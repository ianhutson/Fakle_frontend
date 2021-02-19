import React, { Component } from 'react'
import { connect } from 'react-redux'
import PregameInput from './PregameInput'
import Game from '../Game'

class PregameContainer extends Component {
    

   render(){
    return (
        <div>
            {this.props.isSubmitted === false && <PregameInput submit={this.props.submit}/>}
            {this.props.isSubmitted && <Game settings={this.props}/>}
        </div>
        )
    }}

const mapStateToProps = state => ({ 
    num_of_players: state.num_of_players, 
    p1: state.p1, 
    p2: state.p2, 
    p3: state.p3, 
    p4: state.p4, 
    isSubmitted: state.isSubmitted, 
     })

const mapDispatchToProps = dispatch => ({
  submit: game => dispatch({type: 'SUBMIT', game}),
  roll: roll => dispatch({type: 'ROLL', roll}),
  keep: keep => dispatch({type: 'KEEP', keep}),
  end: end => dispatch({type: 'END', end}),
  select: value => dispatch({type: 'SELECT', value}),

})

export default connect(mapStateToProps, mapDispatchToProps)(PregameContainer)
