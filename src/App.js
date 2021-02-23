import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/ui/routes/About'
import Rules from './components/ui/routes/Rules'
import Leaderboard from './components/ui/routes/Leaderboard'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component{
  constructor(props) {
    super(props)
  
    }
  render(){
  return (
    <div className='App'>
    <Router >
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={3000}
          classNames='fade'
         >
        <Switch location={location}>
          <Route exact path="/about" component={About} history={useHistory}/>
          <Route exact path="/rules" component={Rules} history={useHistory}/>
          <Route exact path="/leaderboard" component={Leaderboard} history={useHistory}/>
          <Route exact path='/' component={Home}/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
    )}/>
    </Router>
    </div>
   );
  }
}


export default connect() (App);
