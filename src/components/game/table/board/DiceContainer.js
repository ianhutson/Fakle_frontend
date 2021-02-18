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
      this.state = {
       oneSelected: false,
       twoSelected: false,
       threeSelected: false,
       fourSelected: false,
       fiveSelected: false,
       sixSelected: false
      }
    }
    
    handleOnClick(number){
      let x = number
      console.log(x)
      if (x === 1) this.setState({...this.state, oneSelected: !this.state.oneSelected})
      else if (x === 2) this.setState({...this.state, twoSelected: !this.state.twoSelected})
      else if (x === 3) this.setState({...this.state, threeSelected: !this.state.threeSelected})
      else if (x === 4) this.setState({...this.state, fourSelected: !this.state.fourSelected})
      else if (x === 5) this.setState({...this.state, fiveSelected: !this.state.fiveSelected})
      else this.setState({...this.state, sixSelected: !this.state.sixSelected})
      }
  
    
  render() {
    const dice = []
    for (let i = 1; i <= this.state.rollable_dice; i++) {
      let defaults = ['Die 1', 'Die 2', 'Die 3', 'Die 4', 'Die 5', 'Die 6' ]
      dice.push(
        <div>
        <img className={this.state.oneSelected ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, 1)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[0]-1]} />
        <br></br><br></br>
        </div>  
      )
    }
  return (
    <div class="diceContainer">
    <img className={this.state.oneSelected ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, 1)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[0]-1]} />
    <img className={this.state.twoSelected ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, 2)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[1]-1]} />
    <img className={this.state.threeSelected ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, 3)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[2]-1]} />
    <img className={this.state.fourSelected ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, 4)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[3]-1]} />
    <img className={this.state.fiveSelected ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, 5)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[4]-1]} />
    <img className={this.state.sixSelected ? "dice_background_active" : "dice_background"} onClick={this.handleOnClick.bind(this, 6)} src={process.env.PUBLIC_URL + dicearr[this.props.settings.settings.rolled_dice[5]-1]} />
  </div>

  )
}
}

export default connect() (DiceContainer)

