import React from 'react';

class ScoreList extends React.Component {
  scoreList = () => {
      console.log(this.props)
    return this.props.scores.map(score => score.winner )}

  render() {
    return (
      <div>
        {this.scoreList()}
      </div>
    )
  }
}

export default ScoreList;