import React, {useState,useContext} from 'react';
import {UserContext} from './component1.jsx';
function CompD(){   //COmpenent is the consumer component

    const user =useContext(UserContext);
    // const[user, setUSer] = useState("Harsha🫂Kanna");
    return(
        <div className="box">
            <h1>ComponentD</h1>
            {/* <h2>{`Hello ${user}`}</h2> */}
            <h2>{`Bye ${user}`}</h2>

        </div>


    );
}
export default CompD;