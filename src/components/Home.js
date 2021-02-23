import React, { Component } from 'react';
import Header from './ui/Header'
import Footer from './ui/Footer'
import Game from './game/Game'
import PregameInput from './game/PregameInput'
import { connect } from 'react-redux'

class Home extends Component{
    render(){
    return (
        <div>

            <Header store={this.props}/>
            {this.props.isSubmitted === false && <PregameInput submit={this.props.submit}/>}
            {this.props.isSubmitted && <Game store={this.props}/>}
            <Footer /> 
        </div>
        )
    }
}

const mapStateToProps = state => ({
    players: state.players,
    current_player: state.current_player,
    current_turn: state.current_turn,
    keep_value: state.keep_value,
    rollable_dice: state.rollable_dice,
    rolled_dice: state.rolled_dice,
    kept_dice: state.kept_dice,
    selected_value: state.selected_value,
    rollPhase: state.rollPhase,
    selection_array: state.selection_array,
    selected_dice: state.selected_dice,
    rollThrown: state.rollThrown,
    fakle: state.fakle,
    num_of_players: state.num_of_players, 
    isSubmitted: state.isSubmitted, 
    edit_players: state.edit_players
})

const mapDispatchToProps = dispatch => ({
    submit: game => dispatch({type: 'SUBMIT', game}),
    roll: roll => dispatch({type: 'ROLL', roll}),
    keep: keep => dispatch({type: 'KEEP', keep}),
    end: end => dispatch({type: 'END', end}),
    select: value => dispatch({type: 'SELECT', value}),
    edit: value => dispatch({type: 'EDIT', value}),
    edit_confirm: value => dispatch({type: 'EDIT_CONFIRM', value})
  })
export default connect(mapStateToProps, mapDispatchToProps) (Home)
