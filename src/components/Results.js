import axios from 'axios';

function Results(props) {

    let teamId = props.tid
    
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        params: {league: '383', season: '2023', team: `${teamId}`},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_HOST
        }
      };

      async function getData() {
        await axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
      }
      
     
    return (
        <div>
            <button onClick={getData} />
        </div>
        
        
    )
}

export default Results;