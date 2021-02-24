import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class EditPlayers extends Component{
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
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

      const colors = []
      for (let i = 1; i <= this.props.store.num_of_players; i++) {
        colors.push(
            <div>
            <button onClick={this.showMenu} style={{backgroundColor: this.props.store.players[i-1].color}} className="color_button"><h1 style={{color: 'white',padding:'10px', fontFamily: 'digital'}}>P{i}</h1>
            </button>
 {
          this.state.showMenu
            ? (
              <div className="menu" ref={(element) => {
                this.dropdownMenu = element;
              }}>
                <div style={{display:'flex', flexDirection:'column'}}>
                <button style={{fontSize:'24px', backgroundColor:'red', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'blue', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'pink', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'green', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'orange', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'brown', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'maroon', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'purple', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'silver', height:'20px'}}></button>
                <button style={{fontSize:'24px', backgroundColor:'gold', height:'20px'}}></button>
                </div>
              </div>
            )
            : (
              null
            )
            }
          </div>
        );
      }
      
          
    return (
        <div> <div style={{backgroundColor:'#9A0000'}} className="line"></div>
        <br></br>
        <h1>Edit Names: </h1>
        <form>
            <h1>{inputs}</h1><br></br>
        <div> 
          <h1>Edit Colors: </h1>
          <div className="color_selectors">
            {console.log(colors)}
  
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