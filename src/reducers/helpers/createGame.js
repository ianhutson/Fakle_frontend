import {gameConstructor} from './gameConstructor'

function createGame(name){
    const localURL ='http://localhost:3001/games'
    const herokuURL = 'https://fakle-backend.herokuapp.com/games'
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
    fetch(localURL, configObj)
        .then(res => {
            console.log(res)
            res.json()})
        .then(data => {
            console.log(data)
            new gameConstructor(data)
        })
}

export default createGame