import React, { Component } from 'react';
import {Game} from './models/game'

class PregameInput extends Component {
  constructor(props){ 
    super(props) 

  this.state = {
    p1:"Player 1",
    p2:"Player 2",
    p3:"Player 3",
    p4:"Player 4",
    num_of_players: 2,
    isSubmitted: false
  }

}

  handleClick(event) {
    this.setState({
      num_of_players: event.target.value,
    },
     () => {
      console.log("number changed")
    })
  }

 handleChange(event, num) {
   console.log(num)
  let key = 'p'+num
    this.setState({ [key]: event.target.value },
      () => {
        console.log('text changed')
      });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state)
    this.setState({
      isSubmitted: true
    },
    () => {
      const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          winner: ''
        })
    }
    fetch('http://localhost:3001/games', configObj)
        .then(res => res.json())
        .then(data => {
          console.log(data.data)
            let newGame = new Game(data.data.attributes)
            Game.loadedScores.push(newGame)
            Game.generateScoreboard()
        })

    })
  }

  render() {    
    const inputs = [];
 
    for (let i = 1; i <= this.state.num_of_players; i++) {
      let defaults = ['Player 1', 'Player 2', 'Player 3', 'Player 4', ]
      let colors = ['red', 'blue', 'pink', 'green' ]
      inputs.push(
        <div>
        <input onChange={(event)=> this.handleChange(event, i)} type="pregame" className={colors[i-1]} defaultValue={defaults[i-1]} />
        <br></br><br></br>
        </div>  
      )
    }

        return (
          <div className="pregame_container">
          <div className="num_players_button_container">
          <br></br>
          <h1>How many players?</h1>
          <br></br>
          <form >
              <input onClick={(event)=> this.handleClick(event)} className="num_players_button" type="button" value={2} autoFocus/>
              <input onClick={(event)=> this.handleClick(event)} className="num_players_button" type="button" value={3} />
              <input onClick={(event)=> this.handleClick(event)} className="num_players_button" type="button" value={4} />
              <br></br><br></br><br></br>
          </form>
          <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)} >
            {inputs}<br></br>
            <input type="submit" className="submit_button"/>
          </form>
          </div>
          </div>
          </div>
        );   
      } 
  }



export default PregameInput;