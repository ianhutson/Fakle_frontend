import React, { Component } from 'react';
import GameContainer from '../table/GameContainer'

class PregameInput extends Component {
  constructor(props){ 
    super(props) 

  this.state = {
    names: ["Player 1", "Player 2", "Player 3", "Player 4"],
    num_of_players: 2,
    isSubmitted: false
  }

}

  handleClick(event) {
    this.setState({
      num_of_players: event.target.value,
    },
     () => {
      console.log("")
    })
  }

  handleOnSubmit(event) {
   
    
    event.preventDefault();
  
    debugger
    this.props.managePregame(this.state.text)
    this.setState({
      names: '',
      isSubmitted: ''
    },
    () => {
      console.log(this.state)
    })
  }

  render() {    
    const inputs = [];
 
    for (let i = 1; i <= this.state.num_of_players; i++) {
      inputs.push(
        <div>
        <input type="text" className={"p" + i} defaultValue={this.state.names[i-1]} />
        <br></br><br></br>
        </div>
            
      )
      let p1 = document.getElementsByClassName(p1)
      let p2 = document.getElementsByClassName(p2)
      let p3 = document.getElementsByClassName(p3)
      let p4 = document.getElementsByClassName(p4)
    }

        return (
          <div className="num_players_button_container">
          <br></br>
          <h1>How many players?</h1>
          <br></br>
          <form  onClick={(event)=> this.handleClick(event)}>
              <input className="num_players_button" type="button" value={2} />
              <input className="num_players_button" type="button" value={3} />
              <input className="num_players_button" type="button" value={4} />
              <br></br><br></br><br></br>
          </form>
          <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)} >
            {inputs}<br></br>
            <input type="submit" className="submit_button"/>
          </form>
          </div>
          </div>
        );   
      } 
  }



export default PregameInput;