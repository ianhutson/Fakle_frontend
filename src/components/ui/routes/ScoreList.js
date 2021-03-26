import React from 'react';
import Counter from './Counter'
import Input from './Input'

class ScoreList extends React.Component {
  
  scoreList = () => {
  const winnersArr = this.props.scores.map(score => score.winner.toLowerCase() )
  var reduced = winnersArr.reduce( function (obj, val) {
    obj[val] = (obj[val] || 0) + 1;
    return obj;
    }, {} );
    var sorted = Object.keys(reduced).sort( function(a,b) {  
    return reduced[b] - reduced[a];
    });
  const html = []
  sorted.forEach(winner => {
  if (sorted.includes(winner) === false) sorted.push(winner) 
  });
  sorted.forEach(winner => {
    html.push(
      <>
 
      <h1>{winner} - {winnersArr.filter(x => x === winner).length}</h1>
    <Counter/>
    </>)
  
  })
  return html
  }
    
  render() {
    return (
      <div>
             <Input/>
        {this.scoreList()}
      </div>
    )
  }
}



export default ScoreList;