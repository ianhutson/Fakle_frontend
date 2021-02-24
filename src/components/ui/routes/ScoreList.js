import React from 'react';

class ScoreList extends React.Component {
  
  scoreList = () => {
  const winnersArr = this.props.scores.map(score => score.winner.toLowerCase() )
  const winnersTallies = []
  const html = []
  winnersArr.forEach(winner => {
  if (winnersTallies.includes(winner) === false) winnersTallies.push(winner) 
  });
  winnersTallies.forEach(winner => {
    html.push(<h1>{winner} - {winnersArr.filter(x => x === winner).length}</h1>)
  })
  return html
  }
    
  render() {
    return (
      <div>
        {this.scoreList()}
      </div>
    )
  }
}



export default ScoreList;