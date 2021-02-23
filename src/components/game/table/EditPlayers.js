import { connect } from 'react-redux'
import React, { Component } from 'react';


class EditPlayers extends Component{
  constructor(props){ 
    super(props) 

  this.state = {
  }
}
  handleChange(event, num) {
    console.log(num)
   let key = 'p'+num
     this.setState({ [key]: event.target.value },
       () => {
         console.log('text changed')
       });
   }
  render(){
    const inputs = [];
    for (let i = 1; i <= this.props.store.num_of_players; i++) {
      inputs.push(
        <div>
       <input onChange={(event)=> this.handleChange(event, i)} type="pregame" className={this.props.store.players[i-1].color} defaultValue={this.props.store.players[i-1].name} />
        <br></br>
        </div>  
      )}
    return (
        <div> <h1>Names: </h1>
        <form>
            <h1>{inputs}</h1><br></br>
            {console.log(this.state)}
            <submit onClick={()=> {this.props.store.edit_confirm(this.state)}} className="game_buttons" style={{width:'80%'}}>Confirm</submit>
            </form>
        </div>
    )
}
}


export default connect()(EditPlayers)
