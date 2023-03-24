import classes from "./Played.module.css";
import { PieChart, Pie } from 'recharts';
 

function Played(props) {

  let played_wins_data = [
    { name: 'played_home', value: props.data[1].home},
    { name: 'played_away', value: props.data[1].away},
  ]

  let played_loses_data = [
    { name: 'played_home', value: props.data[3].home},
    { name: 'played_away', value: props.data[3].away},
  ]

  let played_draws_data = [
    { name: 'played_home', value: props.data[2].home},
    { name: 'played_away', value: props.data[2].away},
  ]

  return (
    <div>
        <p className={classes.header}>משחקים מתחילת העונה</p>
        <div className={classes.container}>
        <div>
            <div className={classes.graph_container}> 
              <p className={classes.inner_header_up}> הפסדים מתחילת העונה</p>
              <PieChart width={200} height={180}>
              <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={played_loses_data}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#BF0B3B"
                  label
                />
              </PieChart>
              <p className={classes.inner_header_down}>חוץ  -  בית</p>
            </div>
          </div>
          <div>
            <div className={classes.graph_container}> 
              <p className={classes.inner_header_up}> נצחונות מתחילת העונה</p>
              <PieChart width={200} height={180}>
              <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={played_wins_data}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#29A632"
                  label
                />
              </PieChart>
              <p className={classes.inner_header_down}>חוץ  -  בית</p>
            </div>
          </div>
          <div>
            <div className={classes.graph_container}> 
              <p className={classes.inner_header_up}>תיקו מתחילת העונה</p>
              <PieChart width={200} height={180}>
              <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={played_draws_data}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#A6A6A6"
                  label
                />
              </PieChart>
              <p className={classes.inner_header_down}>חוץ  -  בית</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Played;
