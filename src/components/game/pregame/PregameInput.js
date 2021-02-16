import React, { Component } from 'react';
import { connect } from 'react-redux'

class PregameInput extends Component {
  constructor(props){ 
    super(props) 

  this.state = {
    names: ["Player 1", "Player 2", "Player 3", "Player 4"],
    num_of_players: 2
  }

  this.handleClick = this.handleClick.bind(this) 
}

  handleClick(event) {
    this.setState({
      num_of_players: event.target.value,
    },
     () => {
      console.log(this.state)
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addSettings(this.state);
    this.setState({
      names: event.target.value,
    });
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
      console.log(inputs)
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
          <form onSubmit={(event)=> this.handleOnSubmit(event)} >
            {inputs}<br></br>
            <input type="submit" className="submit_button"/>
          </form>
          </div>
          </div>
        );   
      } 
  }



export default PregameInput;