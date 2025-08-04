import React, {useState} from 'react';
function Colpic(){
    const [color,setColor]=useState("#fffff");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-cont">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type ="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}
export default Colpic;