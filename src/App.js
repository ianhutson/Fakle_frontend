import React from 'react'
import Home from './components/Home'
import Players from './components/ui/routes/Players'
import Rules from './components/ui/routes/Rules'
import Leaderboard from './components/ui/routes/Leaderboard'
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
