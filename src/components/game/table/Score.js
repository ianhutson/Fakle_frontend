import React, { Component } from 'react';
import { connect } from 'react-redux'
import EditPlayers from './EditPlayers'
class Score extends Component{
        render(){
        return (
            <div className="score_container">
            <div className="totals_container">
               <h1> Totals: </h1><br></br>
                <div className="totals">
                <table>
                {this.props.store.players.slice(0, this.props.store.num_of_players).map((player) => (
                    
                    <tr  key={player.id}>
                    <th style={{color: player.color}}>{player.name}</th>
                    <td>{player.score}</td>
                </tr>
                ))}
                </table><br></br>
   
                {this.props.store.edit_players === false && <button onClick={this.props.store.edit} className="game_buttons" style={{width:'80%'}}>Edit Players</button>}
                {this.props.store.edit_players === true && <EditPlayers store={this.props.store}/> }
            </div>
        </div>
        <br></br>
            
    </div> 
    )
}
}
export default connect()(Score)
