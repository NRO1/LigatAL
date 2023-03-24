import classes from "./Cards.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function Cards(props) {
  let yellow_cards_data = [
    { name: "0-15", cards: props.data[0]["0-15"].total },
    { name: "16-30", cards: props.data[0]["16-30"].total },
    { name: "31-45", cards: props.data[0]["31-45"].total },
    { name: "46-60", cards: props.data[0]["46-60"].total },
    { name: "61-75", cards: props.data[0]["61-75"].total },
    { name: "76-90", cards: props.data[0]["76-90"].total },
    { name: "91-105", cards: props.data[0]["91-105"].total },
    { name: "106-120", cards: props.data[0]["106-120"].total },
  ];

  let red_cards_data = [
    { name: "0-15", cards: props.data[1]["0-15"].total },
    { name: "16-30", cards: props.data[1]["16-30"].total },
    { name: "31-45", cards: props.data[1]["31-45"].total },
    { name: "46-60", cards: props.data[1]["46-60"].total },
    { name: "61-75", cards: props.data[1]["61-75"].total },
    { name: "76-90", cards: props.data[1]["76-90"].total },
    { name: "91-105", cards: props.data[1]["91-105"].total },
    { name: "106-120", cards: props.data[1]["106-120"].total },
  ];

  return (
    <div>
      <p className={classes.header}>כרטיסים מתחילת העונה</p>
      <div className={classes.container}>
        <div className={classes.graph_container}>
          <p className={classes.inner_header_up}> כרטיסים צהובים</p>
          <div style={{ backgroundColor: "#f4f0aa" }}>
            <BarChart
              width={600}
              height={300}
              data={yellow_cards_data}
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
              <Bar dataKey="cards" fill="#77731b" />
            </BarChart>
          </div>
        </div>
        <div className={classes.graph_container}>
          <p className={classes.inner_header_up}> כרטיסים אדומים</p>
          <div style={{ backgroundColor: "#f39d9d" }}>
            <BarChart
              width={600}
              height={300}
              data={red_cards_data}
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
              <Bar dataKey="cards" fill="#9e2727dd" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
