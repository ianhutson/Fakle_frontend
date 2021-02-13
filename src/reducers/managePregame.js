export default function managePregame(state = {
  p1:"Player 1",
  p2:"Player 2",
  p3:"Player 3",
  p4:"Player 4",
  num_of_players: 2,
  isSubmitted: false
  }, action) {
    switch (action.type) {

    case 'SUBMIT':
      console.log(action.pregame)
        const settings = { pregame: action.pregame };

        return {
          ...state,
          p1: settings, 
          p2: settings,
          p3: settings,
          p4: settings,
          num_of_players: settings,
          isSubmitted: true
          }

      default:
        return state;
  
    }
  };