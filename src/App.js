import React from 'react'
import Home from './containers/Home'
import Players from './containers/Players'
import Rules from './containers/Rules'
import Leaderboard from './containers/Leaderboard'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


function App() {
  return (
    <div className='App'>
    <Router>
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={3000}
          classNames='fade'
         >
        <Switch location={location}>
          <Route exact path="/players" component={Players} />
          <Route exact path="/rules" component={Rules}/>
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/" component={Home} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
    )}/>
    </Router>
    </div>
   );
  }

export default App;
