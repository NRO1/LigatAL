import { useState, useEffect } from "react";


function Streak(props){
    const[streak, setStreak] = useState([]);

    useEffect(() => {
        setStreak(props)
     },[props])
      

    return (
        <div>
        </div>
    )

}

export default Streak;