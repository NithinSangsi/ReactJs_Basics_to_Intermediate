import React, {useState,useContext} from 'react';
import {UserContext} from './component1.jsx';
import CompC from './component3.jsx';
function CompB(){
    // const[user, setUSer] = useState("Amma ❤️ Nanna");  
    //Normally in every component we cn add the statement lines to display the text in the component 
    //further we use the props to pass from the component A to component D

    const user =useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <h2>{`Nice to meet u ${user}`}</h2>
            <CompC/>
        </div>


    );
}
export default CompB;