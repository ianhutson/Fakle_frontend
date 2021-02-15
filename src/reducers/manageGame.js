export default function manageGame(state = {
    p1_score: 0,
    p2_score: 0, 
    p3_score: 0, 
    p4_score: 0, 
    current_player: p1,
    current_turn: 1,
    keep_value: 0,
    rollable_dice: 6,
    kept_dice: [],

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