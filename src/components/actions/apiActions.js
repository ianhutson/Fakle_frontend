export const fetchScores = () => {
  const localURL ='http://localhost:3001/games'
  const herokuURL = 'https://fakle-backend.herokuapp.com/games'
    return (dispatch) => {
      dispatch({ type: 'LOADING'})
      fetch(herokuURL).then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'POSTING', scores: responseJSON })
      })
    }
  }