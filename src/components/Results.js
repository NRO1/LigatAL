import axios from "axios";
import classes from "./Results.module.css";
import { useState } from "react";

function Results(props) {
  const [streakArray, setStreakArray] = useState([]);
  const [playedArray, setPlayedArray] = useState([]);
  const [goalsArry, setGoalsArray] = useState([]);
  const [cardsArray, setCardsArray] = useState([]);
  const [lineupsArray, setLineupsArray] = useState([]);

  let teamId = props.tid;

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
    params: { league: "383", season: "2022", team: `${teamId}` },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_HOST,
    },
  };

  let streak_arr = [];
  let played_arr = [];
  let goals_arr = [];
  let cards_arr = [];
  let lineups_arr = [];

  async function getData() {
    await axios
      .request(options)
      .then(function (response) {
        let streak = { ...response.data.response.form };
        streak_arr = Object.values(streak);
        setStreakArray(streak_arr);

        let played = {...response.data.response.fixtures};
        played_arr = Object.values(played);
        setPlayedArray(played_arr)

        let goals = {...response.data.response.goals};
        goals_arr = Object.values(goals);
        setGoalsArray(goals_arr)

        let cards = {...response.data.response.cards};
        cards_arr = Object.values(cards);
        setCardsArray(cards_arr);
        
        let lineups = {...response.data.response.lineups};
        lineups_arr = Object.values(lineups);
        setLineupsArray(lineups_arr)
           
        console.log(streakArray)
        console.log(playedArray)
        console.log(cardsArray)
        console.log(goalsArry)
        console.log(lineupsArray) 
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div>
      <div>
        <button onClick={getData} className={classes.btn}>
          בחר קבוצה ולחץ כאן
        </button>
      </div>
      <div>
        <p className={classes.header}>תוצאה מתחילת העונה</p>
        <div>
          {streakArray.map((res, idx) => (
            <p key={idx} className={classes.streak_w}>
             {`${idx + 1} - ${res}`}
            </p>
          ))}
        </div>
        <div>
          {playedArray.map((res, idx) => (
            <p key={idx} className={classes.streak_w}>
             {`${idx + 1} - ${res}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
