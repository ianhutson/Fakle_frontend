import { connect } from 'react-redux'
import React, { Component } from 'react';
import convertToValue from './Converter'
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
      let x = number
      console.log(this.props.settings.settings.settings.select1)
      if (x === 1) this.props.settings.settings.select1
      else if (x === 2) this.props.settings.settings.settings.select2
      else if (x === 3) this.props.settings.settings.settings.select3
      else if (x === 4) this.props.settings.settings.settings.select4
      else if (x === 5) this.props.settings.settings.settings.select5
      else this.props.settings.settings.select6()
      }
    render() {

    const dice = []
    console.log(this.props.settings.settings)
    const classNames = [this.props.settings.settings.oneSelected, this.props.settings.settings.twoSelected, this.props.settings.settings.threeSelected, this.props.settings.settings.fourSelected, this.props.settings.settings.fiveSelected, this.props.settings.settings.sixSelected]

    for (let i = 1; i <= this.props.settings.settings.rollable_dice; i++) {    
      dice.push(
        <div>
        <img className={classNames[i-1] ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, i)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[i-1]-1]} />
        <br></br><br></br>
        </div>  
      )
    }
  return (
    <div>
    <div class="diceContainer">
    {dice}
    
   
  </div><div className="value_container">
  <div className="value"><convertToValue/></div>
  </div></div>
  )
}
}

    

export default connect() (DiceContainer)

