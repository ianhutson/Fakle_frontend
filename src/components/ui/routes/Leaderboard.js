import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import HomeButton from '../HomeButton'
import { connect } from 'react-redux'
import ScoreList from './ScoreList'
import { fetchScores } from '../../actions/apiActions'

class Leaderboard extends Component {

    componentDidMount() {
        this.props.fetchScores()
      }
       
    handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ScoreList scores={this.props.scores}/>
    }
  }
    render(){
    return (
        <div>
            <Header/>
        <div className="pregame_container" style={{height: 'fit-content', width: 'fit-content'}}>
            <h1 style={{fontSize: '50px', textDecoration: 'underline'}}>Leaderboard</h1>
            {this.handleLoading()}
        <br></br>
            <HomeButton style={{}}/>
        </div>
            <Footer/>
        </div>
    )
}
}
const mapDispatchToProps = state => {
    return {
      scores: state.scores,
      loading: state.loading
    }
  }
   
  
  export default connect(mapDispatchToProps, {fetchScores})(Leaderboard)