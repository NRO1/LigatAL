import classes from "./Nav.module.css";
import teams from "../Util/teams";
import { useState } from "react";
import Results from "./Results";

function Nav() {
  const [tid, setTid] = useState(0);
  const [pressed, setPressed] = useState(false);

  let team_list = [];
  team_list = [...teams];

  let x;
  function teamHandler(id) {
    setTid(id);
    setPressed(pressed => !pressed);
    if (pressed) {
      x = classes.img
    } else {
      x = ''
    }
    console.log(pressed, x)
  }

  return (
    <div>
      <div className={classes.g_container}>
        {team_list.map((t) => (
          <img
            key={t.id}
            src={`${process.env.PUBLIC_URL}/assets/${t.img}`}
            alt={t.name}
            onClick={() => teamHandler(t.id)}
            className={x}
          />
        ))}
        <Results tid={tid} />
      </div>
    </div>
  );
}

export default Nav;
