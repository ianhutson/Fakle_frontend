import {gameConstructor} from './gameConstructor'

function createGame(name){
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            winner: name,
        })
    }
    fetch('https://fakle-backend.herokuapp.com/games', configObj)
        .then(res => {
            console.log(res)
            res.json()})
        .then(data => {
            console.log(data)
            new gameConstructor(data)
        })
}

export default createGame