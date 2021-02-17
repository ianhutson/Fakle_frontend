
export default function manageGame(state = {
    p1_score: 0,
    p2_score: 0, 
    p3_score: 0, 
    p4_score: 0, 
    current_player: 1,
    current_turn: 1,
    keep_value: 0,
    rollable_dice: 6,
    kept_dice: [],
    rolled_dice: [],
    selected_value: 0,
    p1:"Player 1",
    p2:"Player 2",
    p3:"Player 3",
    p4:"Player 4",
    num_of_players: 2,
    isSubmitted: false

    }, action) {

      switch (action.type) {

      case 'SUBMIT':
          const settings = { game: action.game };
          return {
            ...state,
            p1: settings.game.p1, 
            p2: settings.game.p2,
            p3: settings.game.p3,
            p4: settings.game.p4,
            num_of_players: settings.game.num_of_players,
            isSubmitted: true
            }

      case 'ROLL':
        console.log(state)
          return {
            ...state,
            rolled_dice: Array.from({length: state.rollable_dice}, () => Math.floor(Math.random() * 6) + 1)
            };
            
           
  
        case 'KEEP':
          const keep = { game: action.keep };

          return{

        };

        case 'END':
          const end = { game: action.end };

          return{
            ...state,

          };

        default:
          return state;
    
      }
    }