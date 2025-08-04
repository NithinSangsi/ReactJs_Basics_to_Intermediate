import React, {useState, createContext} from 'react';
import CompB from './component2.jsx';

export const UserContext =createContext();
function CompA(){

    //component A is the provider component
    const[user, setUSer] = useState("Nithin Sangsi");
    //by passing props through these components is called as props drilling 
    //and it is the time consuming (tedious) process
    //so we use the useContext() React Hook


    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`I am  ${user}`}</h2>
            <UserContext.Provider value ={user}>
                 <CompB user={user}/>
            </UserContext.Provider>
           

        </div>


    );
}
export default CompA;