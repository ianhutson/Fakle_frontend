import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HomeButton from '../HomeButton'

const Rules = () => {
    return (<div>
        <Header/>
        <div className="pregame_container" style={{width: "80%", marginBottom: "5%"}}>
            <h2 style={{textDecoration: "underline"}}>Game Summary</h2>
            <div style={{fontFamily: "lemon"}}>
<h1>OBJECT OF THE GAME:</h1>
<h5 className="rules">The object of the game of Fakle is to score a minimum of 1,000 points.</h5>

<h1>NUMBER OF PLAYERS:</h1>
<h5 className="rules">Fakle can be played by 2-4 players.</h5>

<h1>HOW TO PLAY:</h1>
<h5 className="rules">
The following Fakle rules are the most commonly used, but there are numerous variations to choose from. Before the game begins, players should establish which rules or variations will be used. Our scoring summary chart makes this process easy and provides for endless variety in your Fakle games!
<br></br><br></br>
One player is chosen to begin and play moves clockwise around the table. Each player in turn rolls all six dice and checks to see if they have rolled any scoring dice or combinations. (See Scoring below.) Any dice that score may be set aside and then the player may choose to roll all the remaining dice. The player must set aside at least one scoring die of their choice if possible but is not required to set aside all scoring dice.
<br></br><br></br>
For example, if a player rolled 1-2-2-5-5-6 on their turn, they could set aside the 1 and the two 5's for scoring, or they could choose to set aside only the 1. Any scoring dice that are not set aside may be rerolled along with the non-scoring dice.
<br></br><br></br>
If all six dice have been set aside for scoring (known as having “hot dice”), the player can choose to roll all six dice again and continue adding to their accumulated score or they can bank their points, end their turn, and pass the dice to the next player.
<br></br><br></br>
A player’s turn continues until either they decide to stop (at which point they then score their accumulated points) or until they fail to roll any scoring dice on a throw.
<br></br><br></br>
If a player scores no points on a roll, this is known as a Fakle. The player may continue to roll any dice that have not been previously set aside for scoring, but all of their points gained so far that turn are lost.
<br></br><br></br>
At the end of a player’s turn, any points they have scored are written down and the dice are passed to the next player.
</h5>
<h1>SCORING:</h1>
<h5 className="rules">
1	10 points<br></br>
5	5 points<br></br>
Three 1's	10 points<br></br>
Three 2's	20 points<br></br>
Three 3's	30 points<br></br>
Three 4's	40 points<br></br>
Three 5's	50 points<br></br>
Three 6's	60 points<br></br>
1-2-3-4-5-6 	300 points<br></br>
3 Pairs	150 points (including 4-of-a-kind and a pair)<br></br>
Note that scoring combinations only count when made with a single throw. (Example: If a player rolls a 1 and sets it aside and then rolls two 1’s on their next throw, they only score 300 points, not 1000.)
<br></br><br></br>
Sometimes a single roll will provide multiple ways to score. For example, a player rolling 1-2-4-5-5-5 could score one of the following:
<br></br><br></br>
10 points for the 1<br></br>
15 points for the 1 and a 5<br></br>
50 points for the three 5's<br></br>
600points for the 1 and the three 5's
</h5>
<h1>WINNING:</h1>
<h5 className="rules">The first player to score a total of 1,000 or more points wins, provided that no other players with a remaining turn can exceed that score.</h5>
<HomeButton style={{}}/>
</div>
</div>
<Footer/>
</div>

    )
}

export default Rules