import { connect } from 'react-redux'
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class EditPlayers extends Component{
  constructor(props) {
    super(props);
    console.log(this)
    this.state = {
      players: props.store.players,
      1: props.store.players[0].name, 
      2: props.store.players[1].name, 
      3: props.store.players[2].name, 
      4: props.store.players[3].name, 
      c1: props.store.players[0].color, 
      c2: props.store.players[1].color, 
      c3: props.store.players[2].color, 
      c4: props.store.players[3].color, 
   }
   
  }

  handleChange(event, num) {
    const key = num
     this.setState({[key]: event.target.value},
       () => {
         console.log(this.state)
       });
      }

  setColor(event, num) {
    const key = 'c'+num
    this.setState({[key]: event.value})}
    render(){
    
    const inputs = [];
    for (let i = 1; i <= this.props.store.num_of_players; i++) {
      
      inputs.push(
        <div>
       <input onChange={(event)=> this.handleChange(event, i)} type="pregame" className={this.props.store.players[i-1].color} defaultValue={this.props.store.players[i-1].name} />
        <br></br>
        </div>  
      )}

      const options = [
        {value:'red', className:'red'},
        {value:'blue', className:'blue'},
        {value:'pink', className:'pink'},
        {value:'green', className:'green'},
        {value:'orange', className:'orange'},
        {value:'brown', className:'brown'},
        {value:'maroon', className:'maroon'},
        {value:'purple', className:'purple'},
        {value:'silver', className:'silver'},
        {value:'gold', className:'gold'}
      ]
      const colors = []

      for (let i = 1; i <= this.props.store.num_of_players; i++) {
        colors.push(
            <div>
              <h1 style={{color:this.props.store.players[i-1].color,padding:'10px', fontFamily: 'digital'}}>P{i}</h1>
            <Dropdown className="color_selectors" options={options} onChange={(event) => this.setColor(event, i)} value={options[i-1].value} />
          </div>
        );
      }
          
    return (
        <div> 
          <div style={{backgroundColor:'#9A0000'}} className="line"></div>
        <br></br>
            <h1>Edit Names: </h1>
        <form>
            <h1>{inputs}</h1><br></br>
        <div> 
          <h1>Edit Colors: </h1>
          <div className="color_selectors">
            {colors}
          </div>
       <br></br>
        </div>
        <submit onClick={()=> {this.props.store.edit_confirm(this.state)}} className="game_buttons" style={{width:'80%'}}>Confirm</submit>
            </form>
            <br></br>
        </div>
    )
    }
  }


export default connect()(EditPlayers)