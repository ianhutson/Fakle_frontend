import React, { Component } from 'react';
import { connect } from 'react-redux'

class Score extends Component{
    constructor(props) {
        super(props);
        }
        render(){
    return (
        <div>
            <div className="score_container">
            <div className="totals_container">
               <h1> Totals: </h1><br></br>
                <div className="totals">
                <table>
                <tr>
                <th>{this.props.settings.settings.p1}</th> 
                <th>{this.props.settings.settings.p2}</th>
                <th>{this.props.settings.settings.p3}</th>
                <th>{this.props.settings.settings.p4}</th>
                </tr>
                <tr>
                <th>{this.props.settings.p1_score}</th>
                <th>{this.props.settings.p2_score}</th>
                <th>{this.props.settings.p3_score}</th>
                <th>{this.props.settings.p4_score}</th>
                </tr>
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
    </div> 
    )
}
}
export default connect()(Score)
