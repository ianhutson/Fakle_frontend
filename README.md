# DESCRIPTION

This application is a project built for Flatiron School. It is a dice game app based on Farkle, and it runs on a React frontend and Rails API backend.

[Fakle Backend Repo](https://github.com/ianhutson/Fakle_backend)

# BUILT WITH

- React
- Javascript
- Rails

# INSTALLATION

To install this application in your local environment, clone both front and and backend repositories. Navigate to the backend directory within your console and run the following command:

```bundle && rails:db migrate && rails:db seed && rails s```

This will start your Rails server. When it is live, navigate to the frontend directory and run:

```npm i && npm start```

 to fire up the frontend.

# HOW TO PLAY

##OBJECT OF THE GAME: 
The object of the game of Fakle is to score a minimum of 1,000 points.

##NUMBER OF PLAYERS:  
Fakle can be played by 2-4 players.

##HOW TO PLAY:  
Each player in turn rolls all six dice and checks to see if they have rolled any scoring dice or combinations. (See Scoring below.) Any dice that score may be set aside and then the player may choose to roll all the remaining dice. The player must set aside at least one scoring die of their choice if possible but is not required to set aside all scoring dice.

For example, if a player rolled 1-2-2-5-5-6 on their turn, they could set aside the 1 and the two 5's for scoring, or they could choose to set aside only the 1. Any scoring dice that are not set aside may be rerolled along with the non-scoring dice.

If all six dice have been set aside for scoring (known as having “hot dice”), the player can choose to roll all six dice again and continue adding to their accumulated score or they can bank their points, end their turn, and pass the dice to the next player.

A player’s turn continues until either they decide to stop (at which point they then score their accumulated points) or until they fail to roll any scoring dice on a throw.

If a player scores no points on a roll, this is known as a Fakle. The player may continue to roll any dice that have not been previously set aside for scoring, but all of their points gained so far that turn are lost.

At the end of a player’s turn, any points they have scored are written down and the dice are passed to the next player.

##SCORING:  
1 - 10 points
5 - 5 points
Three 1's - 10 points
Three 2's - 20 points
Three 3's - 30 points
Three 4's - 40 points
Three 5's - 50 points
Three 6's - 60 points
1-2-3-4-5-6 - 300 points
3 Pairs 150 points (including 4-of-a-kind and a pair)
Note that scoring combinations only count when made with a single throw. (Example: If a player rolls a 1 and sets it aside and then rolls two 1’s on their next throw, they only score 30 points, not 100.)

Sometimes a single roll will provide multiple ways to score. For example, a player rolling 1-2-4-5-5-5 could score one of the following:

10 points for the 1
15 points for the 1 and a 5
50 points for the three 5's
60 points for the 1 and the three 5's

##WINNING:  
The first player to score a total of 1,000 or more points wins, provided that no other players with a remaining turn can exceed that score.


# CONTRIBUTING

Bug reports and pull requests are welcome on GitHub at https://github.com/ianhutson/Fakle_frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

# LICENSE

The app is available as open source under the terms of the MIT License.

# CODE OF CONDUCT

Everyone interacting in the Rafflemania on Rails project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.