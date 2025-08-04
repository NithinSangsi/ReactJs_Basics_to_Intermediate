import React, {useState} from 'react';
function Todolist(){
    const[tasks,setTasks]=useState(["Wake up early","Workout","Study","Study Unknown"]);
    const[newtask,setNewTask]=useState(""); //  "" or []

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newtask.trim() !== ""){
            setTasks(t =>[...t,newtask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=>i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index -1]]=
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
            if(index < tasks.length -1 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index +1]]=
            [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="todolist">
            <h1>TO-Do-List</h1>
            <div>
                <input type='text' placeholder='Enter a task...' onChange ={handleInputChange} /> 
                <button className='add-button' onClick ={addTask} >Add</button>           
            </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index} ><span className='text'>{task}</span>
            <button className="delete-button"
            onClick={()=> deleteTask(index)}>
                Delete
            </button>
            <button className="up-button"
            onClick={()=>moveTaskUp(index)}>
                👆
            </button>
            <button className="down-button"
            onClick={()=> moveTaskDown(index)}>
                👇
            </button>
            </li>
        )}
        </ol>
        </div>

    );
}
export default Todolist