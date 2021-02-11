import React from 'react'
import Keep from './KeepSelected'
import End from './EndTurn'
import Roll from './RollDice'
import randomNumGenerator from './lib/dicegenerator'

function GameButtons() {
    const [statearr, setStatearr] = React.useState([2, 5])
    return (
        <div>
           
            <Roll onPress={function () {setStatearr([randomNumGenerator(), randomNumGenerator()])}}/>
            <Keep/>
            <End/>
           
        </div>
    )
}

export default GameButtons
