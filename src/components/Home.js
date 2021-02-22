import React, { Component } from 'react';
import Header from './ui/Header'
import Footer from './ui/Footer'
import Game from './game/Game'
import PregameInput from './game/PregameInput'
import { connect } from 'react-redux'

class Home extends Component{
    constructor(props) {
        super(props);
        }
    render(){
    return (
        <div>
            <Header />
            {this.props.isSubmitted === false && <PregameInput submit={this.props.submit}/>}
            {this.props.isSubmitted && <Game store={this.props}/>}
            <Footer /> 
        </div>
        
    )
    }
}

const mapStateToProps = state => ({
    p1_score: state.p1_score,
    p2_score: state.p2_score, 
    p3_score: state.p3_score, 
    p4_score: state.p4_score, 
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
export default connect(mapStateToProps, mapDispatchToProps) (Home)
