export default function managePregame(state = {
  names: ["Player 1", "Player 2", "Player 3", "Player 4"],
  num_of_players: 2,
  isSubmitted: false
  }, action) {
    switch (action.type) {

    case 'SUBMIT':
        const names = { text: action.text };

        return {
          ...state,
          names: [ ...state.names, names], 
          isSubmitted: true
          }

      default:
        return state;
  
    }
  };