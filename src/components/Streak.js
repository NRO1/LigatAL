import { useState } from "react";


function Streak(props){
    const [streak,setStreak] = useState([])


    function streakHandler() {
        console.log(props)
        /*let streak_arr = []
        for (const x in data1) {   
            streak_arr.push(`${data1[x]}`)
          }
        console.log(streak_arr)
        setStreak(streak_arr)*/
    }
  
      

    return (
        <div>
            <p onClick={streakHandler}>רצף</p>
            <ul>
            {streak.map((cur) => (
                <li key={Math.random()}>{cur}</li>
            ))}
            </ul>
        </div>
    )

}

export default Streak;