import React from 'react';

class SelectPlayersNumber extends React.Component {
  state = {
    num_of_players: 2
  }

  handleSelection = event => {
    this.setState({
      num_of_players: event.target.value
    })
  }

  render() {
    return (
     <div className="num_players_button_container"> 
       <h3>How many players?</h3>
       <br></br>
      <form>
        <input className="num_players_button" type="button" onClick={event => this.handleSelection(event)} value={2} />
        <input className="num_players_button" type="button" onClick={event => this.handleSelection(event)} value={3} />
        <input className="num_players_button" type="button" onClick={event => this.handleSelection(event)} value={4} />
      </form>
      </div>
    )
  }
}

export default SelectPlayersNumber;