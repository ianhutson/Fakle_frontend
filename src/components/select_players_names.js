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
      <form>
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p1} />
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p2} />
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p3} />
        <input type="text" onChange={event => this.handleNameChange(event)} value={this.state.p4} />
      </form>
    )
  }
}

export default SelectPlayersNames;