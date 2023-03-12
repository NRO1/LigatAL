import classes from './Nav.module.css';
import teams from '../Util/teams';
import { useState } from 'react';
import Results from './Results';


function Nav() {
  const [tid, setTid] = useState(0);

  let team_list = [];
  team_list = [...teams];

  function teamHandler(id) {
    setTid(id)
  }

    return (
        <div>
          <div className={classes.g_container}>
            {team_list.map(t => (
              <img key={t.id} src={`${process.env.PUBLIC_URL}/assets/${t.img}`} alt={t.name} onClick={() => teamHandler(t.id)} />
            ))}
            <Results tid={tid} />
          </div>
      </div>
    )
}

export default Nav;