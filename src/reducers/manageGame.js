import combinations from './helpers/combinations'
import createGame from './helpers/createGame'

export default function manageGame(state = {
    players: [
    {id: 1, name: "Player 1", score: 0, color: 'red'},
    {id: 2, name: "Player 2", score: 0, color: 'blue'},
    {id: 3, name: "Player 3", score: 0, color: 'pink'},
    {id: 4, name: "Player 4", score: 0, color: 'green'}],  
    current_player:1,
    current_turn: 1,
    keep_value: 0,
    rollable_dice: 6,
    kept_dice: [],
    rolled_dice: [],
    selected_value: 0,
    num_of_players: 2,
    isSubmitted: false,
    rollPhase: true,
    selected_dice:[],
    selection_array: [],
    rollThrown: false,
    fakle: false,
    edit_players: false,
    scores: [],
    loading: false,
    over: false,
    winner: ""
    }, action) {
    switch (action.type) {

      case 'SUBMIT':
          const settings = { game: action.game }          
          return {
            ...state,
            players: [{id: 1, name: settings.game.p1, score: 0, color: 'red'},
              {id: 2, name: settings.game.p2, score: 0, color: 'blue'},
              {id: 3, name: settings.game.p3, score: 0, color: 'pink'},
              {id: 4, name: settings.game.p4, score: 0, color: 'green'}],
            num_of_players: settings.game.num_of_players,
            isSubmitted: true
            }

      case 'ROLL':
        const rolled_dice_holder = Array.from({length: state.rollable_dice}, () => Math.floor(Math.random() * 6) + 1)
        let eff = false
        let i = 0
          if (combinations(rolled_dice_holder) == 0) eff = true
        if (i < 0) eff = true
          return {
            ...state,
            fakle: eff,
            rolled_dice: rolled_dice_holder,
            rollPhase: false, 
            rollThrown: true
            };
            
      case 'SELECT':
        const includes_check = state.selected_dice.includes(action.value)
        let currentValue = []
        if (includes_check === false){
        currentValue = [...state.selection_array, state.rolled_dice[action.value - 1]]
          return {
            ...state, 
            selected_value: combinations(currentValue).score, 
            selected_dice: [...state.selected_dice, action.value], 
            selection_array: [...state.selection_array, 
                              state.rolled_dice[action.value - 1]]
                            }}
        else 
        currentValue = []
          return {
            ...state, 
            selected_dice: [], 
            selection_array: [],
            selected_value: 0}

        case 'KEEP':
          const kept_dice_clone = state.kept_dice.concat(state.selection_array)
          let rollableDice = 0
          let keptDice = kept_dice_clone
          if (kept_dice_clone.length === 6) {
          rollableDice = 6;
          keptDice = [];}
          else rollableDice = state.rollable_dice - state.selected_dice.length
          if (state.selected_value > 0){
          return{
            ...state, 
            keep_value: state.selected_value + state.keep_value, 
            kept_dice: keptDice, 
            rollable_dice: rollableDice, 
            rollPhase: true, 
            selected_value: 0,
            selected_dice: [],
            selection_array: [],
            rollThrown: false}}

        case 'END':
          const scoreHolder = [0, 0, 0, 0]
          const maxScore = 1000
          let gameOver = false
          let gameWinner = ""
          if(state.fakle === false)
          if (state.current_player === 1) scoreHolder[0] = state.keep_value 
          else if (state.current_player === 2) scoreHolder[1] = state.keep_value
          else if (state.current_player === 3) scoreHolder[2] = state.keep_value
          else scoreHolder[3] = state.keep_value
          const totalHolder = [
            state.players[0].score + scoreHolder[0], 
            state.players[1].score + scoreHolder[1], 
            state.players[2].score + scoreHolder[2], 
            state.players[3].score + scoreHolder[3]]
          let playerNum = state.current_player + 1
          let turn = state.current_turn
          if(playerNum > state.num_of_players){
            if(totalHolder[0] > maxScore || totalHolder[1] > maxScore || totalHolder[2] > maxScore || totalHolder[3] > maxScore){
            gameOver = true
            gameWinner = state.players[totalHolder.indexOf(Math.max(...totalHolder))]
            createGame(gameWinner.name)}
            else
            playerNum = 1
            turn += 1}
          return{
            ...state,
            fakle: false,
            rollPhase: true,
            rollThrown: false,
            current_player: playerNum,
            current_turn: turn,
            keep_value: 0,
            rollable_dice: 6,
            kept_dice: [],
            rolled_dice: [],
            selected_value: 0,
            selected_dice:[],
            selection_array: [],
            players: [
              {id: 1, name: state.players[0].name, score: state.players[0].score + scoreHolder[0], color: state.players[0].color},
              {id: 2, name: state.players[1].name, score: state.players[1].score + scoreHolder[1], color: state.players[1].color},
              {id: 3, name: state.players[2].name, score: state.players[2].score + scoreHolder[2], color: state.players[2].color},
              {id: 4, name: state.players[3].name, score: state.players[3].score + scoreHolder[3], color: state.players[3].color}],  
            over: gameOver,
            winner: gameWinner
          };
          case 'EDIT' :
            return{
              ...state,
              edit_players: true
            }

          case 'EDIT_CONFIRM' :
            return{
              ...state,
              edit_players: false,
              players: [
                {id: 1, name: action.value[1], score: state.players[0].score, color: action.value.c1},
                {id: 2, name: action.value[2], score: state.players[1].score, color: action.value.c2},
                {id: 3, name: action.value[3], score: state.players[2].score, color: action.value.c3},
                {id: 4, name: action.value[4], score: state.players[3].score, color: action.value.c4}]
            }
          case 'LOADING':
              return {
            ...state,
            scores: [...state.scores],
            loading: true
          }
          case 'POSTING':
              return {
            ...state,
            scores: action.scores,
            loading: false
          }
        default:
          return state;
      }
    }
  