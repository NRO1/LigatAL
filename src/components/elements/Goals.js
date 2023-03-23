import classes from "./Goals.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function Goals(props) {
  let for_goals_data = [
    { name: "0-15", goals: props.data[0].minute["0-15"].total },
    { name: "16-30", goals: props.data[0].minute["16-30"].total },
    { name: "31-45", goals: props.data[0].minute["31-45"].total },
    { name: "46-60", goals: props.data[0].minute["46-60"].total },
    { name: "61-75", goals: props.data[0].minute["61-75"].total },
    { name: "76-90", goals: props.data[0].minute["76-90"].total },
    { name: "91-105", goals: props.data[0].minute["91-105"].total },
    { name: "106-120", goals: props.data[0].minute["106-120"].total },
  ];

  let against_goals_data = [
    { name: "0-15", goals: props.data[1].minute["0-15"].total },
    { name: "16-30", goals: props.data[1].minute["16-30"].total },
    { name: "31-45", goals: props.data[1].minute["31-45"].total },
    { name: "46-60", goals: props.data[1].minute["46-60"].total },
    { name: "61-75", goals: props.data[1].minute["61-75"].total },
    { name: "76-90", goals: props.data[1].minute["76-90"].total },
    { name: "91-105", goals: props.data[1].minute["91-105"].total },
    { name: "106-120", goals: props.data[1].minute["106-120"].total },
  ];

  let total_for = props.data[0].total.total;
  let total_against = props.data[1].total.total;

  return (
    <div>
      <p className={classes.header}>גולים מתחילת העונה</p>
      <div className={classes.container}>
        <div className={classes.graph_container}>
          <p className={classes.inner_header_up}> גולים בעד לפי דקה</p>
          <p className={classes.inner_header_down}>{`סה"כ - ${total_for}`}</p>
          <div style={{ backgroundColor: "#faf0e6" }}>
            <BarChart
              width={600}
              height={300}
              data={for_goals_data}
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
              <Bar dataKey="goals" fill="#29A632" />
            </BarChart>
          </div>
        </div>
        <div className={classes.graph_container}>
          <p className={classes.inner_header_up}> גולים נגד לפי דקה</p>
          <p className={classes.inner_header_down}>{`סה"כ - ${total_against}`}</p>
          <div style={{ backgroundColor: "#faf0e6" }}>
            <BarChart
              width={600}
              height={300}
              data={against_goals_data}
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
              <Bar dataKey="goals" fill="#BF0B3B" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
