export const fetchScores = () => {
  const localURL ='http://localhost:3001/games'
  const herokuURL = 'https://fakle-backend.herokuapp.com/games'
    return (dispatch) => {
      dispatch({ type: 'LOADING'})
      console.log('c')
      fetch(localURL).then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log('d')
        dispatch({ type: 'POSTING', scores: responseJSON })
      })
    }
  }