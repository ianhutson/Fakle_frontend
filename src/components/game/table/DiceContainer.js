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
       sixSelected: false,
      
      }
    }
 
    handleOnClick(number){
      let x = number
      if (x === 1) this.setState({...this.state, oneSelected: !this.state.oneSelected})
      else if (x === 2) this.setState({...this.state, twoSelected: !this.state.twoSelected})
      else if (x === 3) this.setState({...this.state, threeSelected: !this.state.threeSelected})
      else if (x === 4) this.setState({...this.state, fourSelected: !this.state.fourSelected})
      else if (x === 5) this.setState({...this.state, fiveSelected: !this.state.fiveSelected})
      else this.setState({...this.state, sixSelected: !this.state.sixSelected})
      }
  
  

  render() {
    const selection_array= []
    const dice = []
    const convertToValue = () => {
  
      const sorted = selection_array.sort()
      const split = sorted.join(', ')
      if (split === '1') return 10
      else if (split === '5') return 50
      else if (split === '1, 1, 1') return 10
      else if (split === '2, 2, 2') return 20
      else if (split === '3, 3, 3') return 30
      else if (split === '4, 4, 4') return 40
      else if (split === '5, 5, 5') return 50
      else if (split === '6, 6, 6') return 60
      else if (split === '1, 1, 1, 1') return 20
      else if (split === '1, 2, 2, 2') return 30
      else if (split === '1, 3, 3, 3') return 40
      else if (split === '1, 4, 4, 4') return 50
      else if (split === '1, 5, 5, 5') return 60
      else if (split === '1, 6, 6, 6') return 70
      else if (split === '1, 1, 1, 5') return 15
      else if (split === '1, 2, 2, 5') return 25
      else if (split === '1, 3, 3, 5') return 35
      else if (split === '1, 4, 4, 5') return 45
      else if (split === '5, 5, 5, 5') return 55
      else if (split === '5, 6, 6, 6') return 65
      console.log(split)
    }
    const classNames = [this.state.oneSelected, this.state.twoSelected, this.state.threeSelected, this.state.fourSelected, this.state.fiveSelected, this.state.sixSelected]
    if (this.state.oneSelected === true) selection_array.push(this.props.settings.settings.rolled_dice[0])
    if (this.state.twoSelected === true) selection_array.push(this.props.settings.settings.rolled_dice[1])
    if (this.state.threeSelected === true) selection_array.push(this.props.settings.settings.rolled_dice[2])
    if (this.state.fourSelected === true) selection_array.push(this.props.settings.settings.rolled_dice[3])
    if (this.state.fiveSelected === true) selection_array.push(this.props.settings.settings.rolled_dice[4])
    if (this.state.sixSelected === true) selection_array.push(this.props.settings.settings.rolled_dice[5])
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
  <div className="value">{convertToValue()}</div>
  </div></div>
  )
}
}

    

export default connect() (DiceContainer)

