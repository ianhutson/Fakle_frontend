export const fetchScores = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING'})
      fetch('http://fakle-backend.herokuapp.com/games').then(response => {
        return response.json()
        // return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'POSTING', scores: responseJSON })
      })
    }
  }