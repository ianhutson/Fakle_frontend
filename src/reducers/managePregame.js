export default function managePregame(state = {
    num_of_players: [],
    names: [],
  }, action) {
    switch (action.type) {
  
    case 'SUBMIT':
        const names = { text: action.text };
        const num_of_players = { num: action.num};

        return {
          ...state,
          num_of_players: [ ...state.num_of_players, num_of_players],
          names: [ ...state.names, names]
          }

      default:
        return state;
  
    }
  };