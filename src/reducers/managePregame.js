export default function managePregame(state = {
    num_of_players: [],
    names: [],
  }, action) {
    switch (action.type) {
  
    case "NUMBER":
      console.log('hi')
      return {
        ...state, num_of_players: action.payload 
      }

    case 'SUBMIT_NAMES':
        const names = { text: action.text };

        return {
          ...state,
          names: [ ...state.names, names]
          }

      default:
        return state;
  
    }
  };