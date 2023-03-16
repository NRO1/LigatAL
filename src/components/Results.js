import axios from 'axios';
import classes from './Results.module.css';
import Streak from './Streak';

function Results(props) {

    let teamId = props.tid
    
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        params: {league: '383', season: '2022', team: `${teamId}`},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_HOST
        }
      };

      let streak = {};
      let played = {};
      let goals = {};
      let cards = {};
      let lineups = {};

      let streak_arr = []

      async function getData() {
        await axios.request(options).then(function (response) {
            streak = {...response.data.response.form};
            for (const x in streak) {   
               streak_arr.push(`${streak[x]}`)
            }
    
            /*played = {...response.data.response.fixtures};
            goals = {...response.data.response.goals};
            cards = {...response.data.response.cards};
            lineups = {...response.data.response.lineups};*/

         }).catch(function (error) {
            console.error(error);
        });
      }
      
     
    return (
        <div>
          <div>
              <button onClick={getData} className={classes.btn}>בחר קבוצה ולחץ כאן</button>
          </div>
          <div>
            <Streak data={streak_arr} />
          </div>
        </div>
    )
}

export default Results;