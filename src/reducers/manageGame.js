
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
    rolled_dice: [1, 2, 3, 4, 5, 6],
    selected_value: 0,
    p1:"Player 1",
    p2:"Player 2",
    p3:"Player 3",
    p4:"Player 4",
    num_of_players: 2,
    isSubmitted: false,
    firstRollThrown: false,
    selected_dice:[],
    selection_array: [],
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
            rolled_dice: Array.from({length: state.rollable_dice}, () => Math.floor(Math.random() * 6) + 1),
            firstRollThrown: true
            };
            
      case 'SELECT':
        const index = state.selection_array.indexOf(state.rolled_dice[action.value-1])
        const clone_of_value_array = [state.selection_array]
        clone_of_value_array.splice(index, 1)
        console.log(clone_of_value_array)



        const index2 = state.selected_dice.indexOf(action.value)
        const clone_of_selected_array = [state.selected_dice]
        clone_of_selected_array.splice(index, 1)
        const includes_check = state.selected_dice.includes(action.value)
        console.log(includes_check)


          if (includes_check === true)
            return {...state, selected_dice: clone_of_selected_array, selection_array: clone_of_value_array}
          else  return {
            ...state, selected_dice: [...state.selected_dice, action.value], selection_array: [...state.selection_array, state.rolled_dice[action.value - 1]]}
          
        

        case 'KEEP':
          return{

        };

        case 'END':
          return{
            ...state,

          };

        default:
          return state;
    
      }
    }