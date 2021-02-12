import React, { Component } from 'react';
import PregameNameInput from './PregameNameInput';

class PregameNumberInput extends Component {

  state = {
    names: '',
    num_of_players: 2
  }

  handleOnClick(event) {
    this.setState({
      num_of_players: event.target.value,
    },
    <PregameNameInput/>
    );
    console.log(event.target.value)
    console.log(this.state.num_of_players)
  }

  render() {
    return (
      <div className="num_players_button_container">
      <br></br>
      <h1>How many players?</h1>
      <br></br>
      <form onSubmit={(event)=> this.handleOnSubmit(event)}>
          <input className="num_players_button" type="button" value={2} />
          <input className="num_players_button" type="button" value={3} />
          <input className="num_players_button" type="button" value={4} />
          <br></br>
          <input type="submit" className="submit_button" />
      </form>
     
      </div>
    );
  }
};

export default PregameNumberInput;