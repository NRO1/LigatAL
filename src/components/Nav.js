import classes from "./Nav.module.css";
import teams from "../Util/teams";
import { useState } from "react";
import Results from "./Results";

function Nav() {
  const [tid, setTid] = useState(0);
  const [teamName, setTeamName] = useState("");

  let team_list = [];
  team_list = [...teams];

  function teamHandler(id, name) {
    setTid(id);

    switch (name) {
      case 'B_Jerusalem':
        setTeamName('בית"ר ירושלים');
        break;
      case 'Ashdod':
        setTeamName('מ.ס. אשדוד');
        break;
      case 'H_Jerusalem':
        setTeamName('הפועל ירושלים');
        break;
      case 'M_Haifa':
        setTeamName('מכבי חיפה');
        break;
      case 'H_BerSheva':
        setTeamName('הפועל באר שבע');
        break;
      case 'M_TelAviv':
        setTeamName('מכבי תל אביב');
        break;
      case 'M_Netanya':
        setTeamName('מכבי נתניה');
        break;
      case 'Hapoel_Haifa':
        setTeamName('הפועל חיפה');
        break;
      case 'Sahnin':
        setTeamName('בני סכנין');
        break;
      case 'H_TelAviv':
        setTeamName('הפועל תל אביב');
        break;
      case 'H_Hadera':
        setTeamName('הפועל חדרה');
        break;
      case 'ks':
        setTeamName('הפועל קריית שמונה');
        break;
      case 'Reine':
        setTeamName('מכבי בני ריינה');
        break;
      case 'Sekzia_ns':
        setTeamName('סקציה נס ציונה');
        break;
      default:
        setTeamName('')
    }
  }

  return (
    <div>
      <div className={classes.g_container}>
        {team_list.map((t) => (
          <img
            key={t.id}
            src={`${process.env.PUBLIC_URL}/assets/${t.img}`}
            alt={t.name}
            onClick={() => teamHandler(t.id, t.name)}
          />
        ))}
         </div>
        <div> 
          <span className={classes.teamName}>{teamName}</span>
        </div>
          <Results tid={tid} />
    </div>
  );
}

export default Nav;
/*comment for testing*/
