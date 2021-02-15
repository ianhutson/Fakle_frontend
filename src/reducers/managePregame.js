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
        const settings = { pregame: action.pregame };
        return {
          ...state,
          p1: settings.pregame.p1, 
          p2: settings.pregame.p2,
          p3: settings.pregame.p3,
          p4: settings.pregame.p4,
          num_of_players: settings.pregame.num_of_players,
          isSubmitted: true
          }

      default:
        return state;
  
    }
  };