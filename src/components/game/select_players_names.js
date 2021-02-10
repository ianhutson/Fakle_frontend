import React from 'react';

class SelectPlayersNames extends React.Component {
  state = {
    p1: "Player 1",
    p2: "Player 2",
    p3: "Player 3",
    p4: "Player 4"
  }

  handleNameChange = event => {
    this.setState({
        p1: event.target.value
    })
  }

  render() {
    return (
      <div className="select_players_names_container">
      <form><br></br>
      <h3>Enter player names:</h3>
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p1} />
        <br></br><br></br>
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p2} />
        <br></br><br></br>
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p3} />
        <br></br><br></br>
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p4} />
      </form></div>
    )
  }
}

export default SelectPlayersNames;