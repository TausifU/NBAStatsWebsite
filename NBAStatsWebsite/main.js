
//Loads Player Data
function loadPlayers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {      
        var players = JSON.parse(this.responseText);

        // get 'data' key inside response
        var playersData = players.data;

        // loop all the players
        for (var player of playersData) {
            // print last_name to the #players element
            document.getElementById("players").innerHTML += "<br />" + player["first_name"] + " " + player["last_name"] + ", " + player["position"] + ", " + player["team"];
        }      
      }
    };

    xhttp.open("GET", "https://www.balldontlie.io/api/v1/players", true);
    xhttp.send();

  }


  //Loads Game Data
  function loadGames() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        var games = JSON.parse(this.responseText);

        // get 'data' key inside response
        var gamesData = games.data;

        // loop all the games
        for (var game of gamesData) {
          //print score data 
            document.getElementById("games").innerHTML += "<br />" + game["home_team_score"] + " - " + game["visitor_team_score"];
        }
      }
    };
    xhttp.open("GET", "https://www.balldontlie.io/api/v1/games", true);
    xhttp.send();
  }

  //Loads Team Data
  function loadTeams() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        

        var teams = JSON.parse(this.responseText);

        // get 'data' key inside response
        var teamsData = teams.data;

        // loop all the teams
        for (var team of teamsData) {
            // print full name and abbreivation
            document.getElementById("games").innerHTML += "<br />" + team["full_name"] + ", " + team["abbreviation"] + ", " + team["conference"] ;
        }



      }
    };
    xhttp.open("GET", "https://www.balldontlie.io/api/v1/teams", true);
    xhttp.send();
  }



