export const fetchScores = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING'})
      fetch('http://localhost:3001/games').then(response => {
        return response.json()
        // return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'POSTING', scores: responseJSON })
      })
    }
  }