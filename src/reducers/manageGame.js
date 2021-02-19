import {convertToValue} from './helpers/Converter'

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
    rollPhase: true,
    selected_dice:[],
    selection_array: [],
    rollThrown: false,
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
 
          return {
            ...state,
            rolled_dice: Array.from({length: state.rollable_dice}, () => Math.floor(Math.random() * 6) + 1),
            rollPhase: false, 
            rollThrown: true
            };
            
      case 'SELECT':
        const index_values = state.selection_array.indexOf(state.rolled_dice[action.value-1])
        const clone_of_value_array = [state.selection_array]
        clone_of_value_array.splice(index_values, 1)
  

        const index_ids = state.selected_dice.indexOf(action.value)
        const clone_of_selected_array = [state.selected_dice]
        clone_of_selected_array.splice(index_ids, 1)
        const includes_check = state.selected_dice.includes(action.value)

          if (includes_check === true)
            return {
              ...state, 
              selected_dice: clone_of_selected_array, 
              selection_array: clone_of_value_array, 
              selected_value: convertToValue(clone_of_value_array)}
          else  return {
            ...state, 
            selected_value: convertToValue([...state.selection_array, state.rolled_dice[action.value - 1]]), 
            selected_dice: [...state.selected_dice, action.value], 
            selection_array: [...state.selection_array, 
            state.rolled_dice[action.value - 1]]}
          
        

        case 'KEEP':
     
          return{
            ...state, 
            keep_value: state.selected_value + state.keep_value, 
            kept_dice: state.selection_array, 
            rollable_dice: state.rollable_dice - state.selection_array.length, 
            rollPhase: true, 
            selected_value: 0,
            selected_dice: [],
            selection_array: [],
            rollThrown: false};

        case 'END':
          return{
            ...state,

          };

        default:
          return state;
    
      }
    }