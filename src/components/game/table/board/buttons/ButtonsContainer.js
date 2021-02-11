import React from 'react'
import Keep from './KeepSelected'
import End from './EndTurn'
import Roll from './RollDice'
import randomNumGenerator from './lib/dicegenerator'

function GameButtons() {
    const [statearr, setStatearr] = React.useState([2, 5])
    return (
        <div className="buttons_container">
    
            <Roll onPress={function () {
              setStatearr([randomNumGenerator(), randomNumGenerator()])
            }}/>
            <Keep/>
            <End/>
            
        </div>
    )
}

export default GameButtons
