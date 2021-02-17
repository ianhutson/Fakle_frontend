import { connect } from 'react-redux'
import React, { Component } from 'react';

const dicearr = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
]

class DiceContainer extends Component{
  constructor(props) {
      super(props);
    }

  render() {
  return (
        <div className="diceContainer">
          {console.log(this.props.settings.settings.rolled_dice)}
          <img alt="" src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[0]-1]}
            style={{width: 80, height: 80, margin:23 }}
          />
          <img alt="" src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[1]-1]}
            style={{ width: 80, height: 80, margin: 23 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[2]-1]}
            style={{ width: 80, height: 80, margin: 23 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[3]-1]}
            style={{ width: 80, height: 80, margin: 23 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[4]-1]}
            style={{ width: 80, height: 80, margin: 23 }}
          />
           <img alt="" src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[5]-1]}
            style={{ width: 80, height: 80, margin: 23 }}
          />
        </div>
 
  )
}
}

export default connect() (DiceContainer)

