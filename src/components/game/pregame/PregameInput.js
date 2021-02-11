import React, { Component } from 'react';

class PregameInput extends Component {

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
         <form onSubmit={(event) => this.handleOnSubmit(event)} onChange={(event) => this.handleOnChange(event)}>
           
           <input className="num_players_button" type="button" value={2} />
           <input className="num_players_button" type="button" value={3} />
           <input className="num_players_button" type="button" value={4} />
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
    
      
   
           <input type="submit" className="submit_button"/>
           </div>
         </form>
         </div>
    );
  }
};

export default PregameInput;