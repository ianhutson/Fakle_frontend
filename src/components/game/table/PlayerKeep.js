import KeptDice from './KeptDice'
import React, { Component } from 'react';

class PlayerKeep extends Component{
    constructor(props) {
        super(props);
      }
    render(){
    return (
        <div>
             <div className="player_keep">
             <div>
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/player_keep.png"}/>
            </div>
                <div className="line"></div>
                <div className="keep_container">
                    <KeptDice settings={this.props}/>
                </div>
                <div className="line"></div>
        
                <div>
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/keep_value.png"}/>
        </div>
                <div className="value_container">
      
                <div className="value">{this.props.settings.keep_value}</div>
                </div>
            </div>
        </div>
    )
}
}

export default PlayerKeep
