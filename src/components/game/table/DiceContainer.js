import { connect } from 'react-redux'
import React, { Component } from 'react';
import {convertToValue} from './Converter'
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
 
    handleOnClick(number){
          this.props.settings.settings.settings.select(number)
      }


    render() {
    const dice = []
    
    
    for (let i = 1; i <= this.props.settings.settings.rollable_dice; i++) {    
      const include_check = this.props.settings.settings.selected_dice.includes(i)
      dice.push(
        <div>
        <img className={include_check ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, i)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[i-1]-1]} />
        <br></br><br></br>
        </div>  
      )
    }
  return (
    <div>
    <div class="diceContainer">
    {dice}
    
   
  </div><div className="value_container">
  <div className="value">{convertToValue(this.props.settings.settings.selection_array)}</div>
  </div></div>
  )
}
}

    

export default connect() (DiceContainer)

