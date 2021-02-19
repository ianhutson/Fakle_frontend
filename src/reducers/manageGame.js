
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
    oneSelected: false,
    twoSelected: false,
    threeSelected: false,
    fourSelected: false,
    fiveSelected: false,
    sixSelected: false,
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
            
      case 'SELECT1':
        if (this.state.oneSelected === false)
            return {
              ...state, oneSelected: true}
        else return {...state, oneSelected: false, selection_array: [...state.selection_array, this.state.rolled_dice[0]]}

      case 'SELECT2':
        if (this.state.twoSelected === false)
            return {
              ...state, twoSelected: true}
        else return {...state, twoSelected: false, selection_array: [...state.selection_array, this.state.rolled_dice[1]]}

      case 'SELECT3':
        if (this.state.threeSelected === false)
            return {
              ...state, threeSelected: true}
        else return {...state, threeSelected: false, selection_array: [...state.selection_array, this.state.rolled_dice[2]]}

      case 'SELECT4':
        if (this.state.fourSelected === false)
            return {
              ...state, fourSelected: true}
        else return {...state, fourSelected: false, selection_array: [...state.selection_array, this.state.rolled_dice[3]]}
      
      case 'SELECT5':
        if (this.state.fiveSelected === false)
            return {
              ...state, fiveSelected: true}
        else return {...state, fiveSelected: false, selection_array: [...state.selection_array, this.state.rolled_dice[4]]}

      case 'SELECT6':
        if (this.state.sixSelected === false)
            return {
              ...state, sixSelected: true}
        else return {...state, sixSelected: false, selection_array: [...state.selection_array, this.state.rolled_dice[5]]}


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