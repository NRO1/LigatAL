import axios from 'axios';
import classes from './Results.module.css';

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

      let stats = {}
      async function getData() {
        await axios.request(options).then(function (response) {
            stats = response.data.response;
            console.log(stats)
        }).catch(function (error) {
            console.error(error);
        });
      }
      
     
    return (

        <div>
          <div>
              <button onClick={getData} className={classes.btn}>קבל תוצאות</button>
          </div>
            
        </div>
        
        
    )
}

export default Results;