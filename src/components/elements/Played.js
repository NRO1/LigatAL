import classes from "./Played.module.css";
import { PieChart, Pie } from 'recharts';
 

function Played(props) {
  console.log(props.data)
  const data_wins = [
    {name: 'wins-away', value: props.data[1].away},
    {name: 'wins-home', value: props.data[1].home},
  ]
      
  return (
    <div>
        <p className={classes.header}>משחקים מתחילת העונה</p>
      <div>
        <div className={classes.container}>
            <p>משחקים ששוחקו</p>
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data_wins}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#D50BD9"
                  label
            />
          </PieChart>
          <p>בית  -  חוץ</p>
        </div>
      </div>
    </div>
  );
}

export default Played;
