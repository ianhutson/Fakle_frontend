import React, { Component } from 'react';
import { connect } from 'react-redux'

class PregameNameInput extends Component {

  state = {
    names: ["Player 1", "Player 2", "Player 3", "Player 4"],
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
    
    switch (this.state.num_of_players) {
    case 2:
    return (
      <div>
          <form onSubmit={(event)=> this.handleOnSubmit(event)} onChange={(event) => this.handleOnChange(event)}>
              <div className="player_names_container">
                <br></br>
                <br></br>
                <h1>Enter player names:</h1>
                <br></br>
                <input type="text" className="p1" value={this.state.names[0]} />
                <br></br><br></br>
                <input type="text" className="p2" value={this.state.names[1]} />
                <br></br><br></br>

              <input type="submit" className="submit_button" />
              </div>
      </form>; 
      </div>
    );
    case 3: 
    return (
      <div>
          <form onSubmit={(event)=> this.handleOnSubmit(event)} onChange={(event) => this.handleOnChange(event)}>
              <div className="player_names_container">
                  <br></br>
                  <br></br>
                  <h1>Enter player names:</h1>
                  <br></br>
                  <input type="text" className="p1" value={this.state.names[0]} />
                  <br></br><br></br>
                  <input type="text" className="p2" value={this.state.names[1]} />
                  <br></br><br></br>
                  <input type="text" className="p3" value={this.state.names[2]} />
                  <br></br><br></br>
                  <input type="submit" className="submit_button" />
                  </div>
          </form>; 
          </div>
        );
    case 4: 
    return (
      <div>
          <form onSubmit={(event)=> this.handleOnSubmit(event)} onChange={(event) => this.handleOnChange(event)}>
              <div className="player_names_container">
                    <br></br>
                    <br></br>
                    <h1>Enter player names:</h1>
                    <br></br>
                    <input type="text" className="p1" value={this.state.names[0]} />
                    <br></br><br></br>
                    <input type="text" className="p2" value={this.state.names[1]} />
                    <br></br><br></br>
                    <input type="text" className="p3" value={this.state.names[2]} />
                    <br></br><br></br>
                    <input type="text" className="p4" value={this.state.names[3]} />
                    <br></br><br></br>
                    <input type="submit" className="submit_button" />
                    </div>
            </form>; 
          </div>  
        );   
      } 
  }
}

const mapStateToProps = ({ settings }) => ({ settings })

const mapDispatchToProps = dispatch => ({ addPregame: pregame => dispatch({ type: "SUBMIT_NUMBER", pregame }) })



export default connect(mapStateToProps, mapDispatchToProps)(PregameNameInput);