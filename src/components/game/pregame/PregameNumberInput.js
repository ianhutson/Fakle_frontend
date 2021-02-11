import React, { Component } from 'react';

class PregameNumberInput extends Component {

  state = {
    names: '',
    num_of_players: 2
  }

  handleOnChange(event) {
    this.setState({
      num_of_players: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addPregame(this.state);
    this.setState({
      names: event.target.value,
      
    });
  }

  render() {
    return (
      <div className="num_players_button_container">
      <br></br>
      <h1>How many players?</h1>
      <br></br>
      <form onSubmit={(event)=> this.handleOnSubmit(event)} onChange={(event) => this.handleOnChange(event)}>
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