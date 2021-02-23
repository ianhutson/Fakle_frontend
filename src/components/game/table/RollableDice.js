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

class RollableDice extends Component{ 
    handleOnClick(number){
          this.props.store.select(number)
      }
    render() {
    const dice = []
    for (let i = 1; i <= this.props.store.rollable_dice; i++) {    
      const include_check = this.props.store.selected_dice.includes(i)
      dice.push(
        <div>
        <img className={include_check ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, i)} alt="dice" src={process.env.PUBLIC_URL + dicearr[this.props.store.rolled_dice[i-1]-1]} />
        <br></br><br></br>
        </div>  
      )
    }
   
  return (
    <div>
    <div class="diceContainer">
    {dice}
    </div>
 </div>
  )
}
}

    

export default connect() (RollableDice)

