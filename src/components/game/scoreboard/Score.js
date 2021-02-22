import React, { Component } from 'react';
import { connect } from 'react-redux'

class Score extends Component{
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {name: this.props.store.p1, score: this.props.store.p1_score},
                {name: this.props.store.p2, score: this.props.store.p2_score},
                {name: this.props.store.p3, score: this.props.store.p3_score},
                {name: this.props.store.p4, score: this.props.store.p4_score}
            ]
        }
        }

        renderTableData() {
            return this.state.players.slice(0, this.props.store.num_of_players).map((player, index) => {
               const { id, name, score } = player //destructuring
               return (
                  <tr key={name}>
                      <td>{name}</td>
                      <td>{score}</td>
                  </tr>
               )
            })
         }

         renderTableHeader() {
            let header = Object.keys(this.state.players[0])
            return header.map((key, index) => {
               return <th key={index}>{key.toUpperCase()}</th>
            })
         }

        render(){
        return (
        
            <div className="score_container">
                {console.log(this.props)}
            <div className="totals_container">
               <h1> Totals: </h1><br></br>
                <div className="totals">
                <table>
                <tbody>
                <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
                </tbody>
                </table>
            </div>
        </div>
        <br></br><br></br><br></br>
            <div className="scoreboard">  
            <h1>Score History:</h1><br></br>
              <table>
              <tr>
              <th>Turn</th>
              <th>Player 1</th>
              <th>Player 2</th>
              <th>Player 3</th>
              <th>Player 4</th>
              </tr>
            </table>
        </div>
    </div> 
    )
}
}
export default connect()(Score)
