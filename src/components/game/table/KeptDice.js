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

class KeptDice extends Component{
  constructor(props) {
      super(props);
    }
    render() {
    const dice = []
    for (let i = 1; i <= this.props.store.kept_dice.length; i++) {    
      dice.push(
        <div>
        <img className="dice_background" src={process.env.PUBLIC_URL + dicearr[this.props.store.kept_dice[i-1]-1]} />
        <br></br><br></br>
        </div>  
      )
    }
  return (
      <div class="diceContainer">
      {dice}
    </div>
  )
}
}

    

export default connect()(KeptDice)

