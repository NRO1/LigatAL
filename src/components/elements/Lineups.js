import classes from "./Lineups.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function Lineups(props) {
  let lineup_data = props.data;

  return (
    <div>
      <p className={classes.header}>הרכבים מתחילת העונה</p>
      <div style={{ backgroundColor: "#faf0e6" }}>
        <BarChart
          width={1000}
          height={400}
          data={lineup_data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="NOT" fill="#29A632" />
        </BarChart>
      </div>
    </div>
  );
}

export default Lineups;
