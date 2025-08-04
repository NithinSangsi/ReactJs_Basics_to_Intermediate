import React, {useState,useContext} from 'react';
import {UserContext} from './component1.jsx';
import CompD from './component4.jsx';
function CompC(){
    // const[user, setUSer] = useState("Akka❤️");

    const user =useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`How are u ${user}`}</h2>
            <CompD/>

        </div>


    );
}
export default CompC;