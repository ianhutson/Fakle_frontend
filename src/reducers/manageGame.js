import combinations from './helpers/combinations'

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
    }, action) {
    switch (action.type) {

      case 'SUBMIT':
          const settings = { game: action.game };
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
          var combine = function(a, min) {
            var fn = function(n, src, got, all) {
                if (n === 0) {
                    if (got.length > 0) {
                        all[all.length] = got;
                    }
                    return;
                }
                for (var j = 0; j < src.length; j++) {
                    fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
                }
                return;
            }
            var all = [];
            for (var i = min; i < a.length; i++) {
                fn(i, a, [], all);
            }
            all.push(a);
            return all;
        }
        const combos = combine(rolled_dice_holder, 1)
        let i = 0
        combos.forEach(combo => {
          if (combo in combinations === true) i =+ 1
        })
        if (i === 0) eff = true
          return {
            ...state,
            fakle: eff,
            rolled_dice: rolled_dice_holder,
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

      
        const currentValue = [...state.selection_array, state.rolled_dice[action.value - 1]].sort().join(', ')
          if (includes_check === true)
            return {
              ...state, 
              selected_dice: clone_of_selected_array, 
              selection_array: clone_of_value_array, 
              selected_value: combinations[clone_of_selected_array.sort().join(', ')]}
          else return {
            ...state, 
            selected_value: combinations[currentValue], 
            selected_dice: [...state.selected_dice, action.value], 
            selection_array: [...state.selection_array, 
            state.rolled_dice[action.value - 1]]}
          
        

        case 'KEEP':
          const kept_dice_clone = state.kept_dice.concat(state.selection_array)
          let rollableDice = 0
          let keptDice = kept_dice_clone
          if (kept_dice_clone.length === 6) {
          rollableDice = 6;
          keptDice = [];}
          else rollableDice = state.rollable_dice - state.selected_dice.length
          console.log(state.selected_dice.length)
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
          let playerNum = state.current_player + 1
          let turn = state.current_turn
          if(playerNum > state.num_of_players){
            playerNum = 1
            turn += 1}
          console.log(turn)
          const scoreHolder = [0, 0, 0, 0]
          if(state.fakle === false)
          if (state.current_player === 1) scoreHolder[0] = state.keep_value 
          else if (state.current_player === 2) scoreHolder[1] = state.keep_value
          else if (state.current_player === 3) scoreHolder[2] = state.keep_value
          else scoreHolder[3] = state.keep_value
    
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
            players: [...state.players,
              {id: 1, name: state.players[0].name, score: state.players[0].score + scoreHolder[0]},
              {id: 2, name: state.players[1].name, score: state.players[1].score + scoreHolder[1]},
              {id: 3, name: state.players[2].name, score: state.players[2].score + scoreHolder[2]},
              {id: 4, name: state.players[3].name, score: state.players[3].score + scoreHolder[3]}],  
          };
          case 'EDIT' :
            return{
              ...state,
              edit_players: true
            }

          case 'EDIT_CONFIRM' :
            console.log(action.value.p1)
            const new_names = []
            const new_colors = []

            if (action.value.c1) new_colors.push(action.value.c1)
            else new_colors.push(state.players[0].color)
            if (action.value.c2) new_colors.push(action.value.c2)
            else new_colors.push(state.players[1].color)
            if (action.value.c3) new_colors.push(action.value.c3)
            else new_colors.push(state.players[2].color)
            if (action.value.c4) new_colors.push(action.value.c4)
            else new_colors.push(state.players[3].color)

            if (action.value.p1) new_names.push(action.value.p1)
            else new_names.push(state.players[0].name)
            if (action.value.p2) new_names.push(action.value.p2)
            else new_names.push(state.players[1].name)
            if (action.value.p3) new_names.push(action.value.p3)
            else new_names.push(state.players[2].name)
            if (action.value.p4) new_names.push(action.value.p4)
            else new_names.push(state.players[3].name)
      
            return{
              ...state,
              edit_players: false,
              players: [ 
                {id: 1, name: new_names[0], score: state.players[0].score, color: new_colors[0]},
                {id: 2, name: new_names[1], score: state.players[1].score, color: new_colors[1]},
                {id: 3, name: new_names[2], score: state.players[2].score, color: new_colors[2]},
                {id: 4, name: new_names[3], score: state.players[3].score, color: new_colors[3]}
            ]
            }

        default:
          return state;
    
      }
    }
  