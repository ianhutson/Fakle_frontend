import React, { Component } from 'react';

class PregameNameInput extends Component {

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
 <div>
      <form onSubmit={(event)=> this.handleOnSubmit(event)} onChange={(event) => this.handleOnChange(event)}>

          <div className="player_names_container">
              <br></br>
              <br></br>
              <h1>Enter player names:</h1>
              <br></br>
              <input type="text" className="p1" value={this.state.p1} />
              <br></br><br></br>
              <input type="text" className="p2" value={this.state.p2} />
              <br></br><br></br>
              <input type="text" className="p3" value={this.state.p3} />
              <br></br><br></br>
              <input type="text" className="p4" value={this.state.p4} />
              <br></br>
  
  
              <input type="submit" className="submit_button" />
              </div>
      </form>
      </div>
    );
  }
};

export default PregameNameInput;