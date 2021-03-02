import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/ui/routes/About'
import Rules from './components/ui/routes/Rules'
import Leaderboard from './components/ui/routes/Leaderboard'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';

class App extends Component{
  constructor(props) {
    super(props)
  
    }
  render(){
  return (
    <div className='App'>
    <Router >
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/rules"><Rules/></Route>
          <Route path="/leaderboard"><Leaderboard/></Route>
          <Route path='/'><Home/></Route>
        </Switch>
    </Router>
    </div>)
    }
}


export default App;
