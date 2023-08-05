const team = {
    _players : [{firstname: 'Mark', lastName: 'Mcguire', age: 25},
                {firstname: 'Sammy', lastName: 'Sosa', age: 23},
                {firstname: 'Ken', lastName: 'Griffey Jr.', age: 21}
    ],
    _games : [{opponent: 'Mariners', teamPoints: 15, opponentPoints: 12},
              {opponent: 'Giants', teamPoints: 9, opponentPoints: 2},
              {opponent: 'Yankees', teamPoints: 4, opponentPoints: 9}
    ],
    get Players() {
      return this._players;
    },
    get Games() {
      return this._games;
    },
    addPlayer (newFirstName, newLastName, newAge) {
      let obj = {
        firstName: newFirstName,
        lastname: newLastName,
        age: newAge
      };
      this._players.push(obj);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.Players);
  
  team.addGame('Blues', 23, 33);
  console.log(team.Games);