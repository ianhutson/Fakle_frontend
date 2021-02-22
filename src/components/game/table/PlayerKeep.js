import KeptDice from './KeptDice'
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <KeptDice store={this.props.store}/>
                </div>
                <div className="line"></div>
        
                <div>
            <img className="board_title" alt="title" src={process.env.PUBLIC_URL + "/keep_value.png"}/>
        </div>
                <div className="value_container">
      
                <div className="value">{this.props.store.keep_value}</div>
                </div>
            </div>
        </div>
    )
}
}

export default connect() (PlayerKeep)
