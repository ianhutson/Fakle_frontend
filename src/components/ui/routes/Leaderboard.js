import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import HomeButton from '../HomeButton'
import { connect } from 'react-redux'
import ScoreList from './ScoreList'
import { fetchScores } from '../../actions/apiActions'

class Leaderboard extends Component {

    componentDidMount() {
      console.log('a')
        this.props.fetchScoresWithDispatch()
        console.log('b')
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
        <div className="leaderboard_container" >
            <div classname="leaderboard_title"><h3>Leaderboard</h3></div>
            <div className="leader">
            {this.handleLoading()}</div>
        <br></br>
            <HomeButton/>
        </div>
            <Footer/>
        </div>
    )
}
}
const mapStateToProps = state => {
    return {
      scores: state.scores,
      loading: state.loading
    }
  }

const mapDispatchToProps = dispatchFN => {
    return {
      fetchScoresWithDispatch: () => dispatchFN(fetchScores())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)