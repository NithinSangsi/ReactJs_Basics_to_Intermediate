import React, {useEffect, useState,useRef} from 'react';
function Mycomp(){

    // const[name, setName]=useState("Guest");
    // const[age, setAge]=useState(0);
    // const[isBusinessMan, setIsBusinessMan]=useState(true);
    // const[isBillionare, setIsBillionare]=useState(true);



    //  const updateName =() =>{setName("Nithin Sangsi");}
    // // const updateName =() =>{setName}   //default value is put in useState that will appear as name
    //  const incrementAge =() =>{setAge(age+1);}
    //  const decrementAge =() =>{setAge(age-1);}
    //  const toggleBusiness=()=>{setIsBusinessMan(!isBusinessMan)}
    //  const toggleBillionare=()=>{setIsBillionare(!isBillionare)}


    // return(
    //     <div>
    //         <p>Name: {name}</p>
    //         <button onClick ={updateName}>set Name</button>
    //         <p>Age: {age}</p>
    //         <button onClick ={incrementAge}>Inc Age</button>
    //         <br></br>
    //         <br></br>
    //         <button onClick ={decrementAge}>Dec Age</button>
    //         <p>BusinessMan: {isBusinessMan ? "Yes" : "No"}</p>
    //         <button onClick ={toggleBusiness}>set Business</button>
    //         <p>Billionare: {isBillionare ? "Yes" : "No"}</p>
    //         <button onClick ={toggleBillionare}>set Billionare</button>

    //     </div>
    // );
//OnChange EH
// const [name,setName]=useState("Guest");
// const [quantity,setQuantity]=useState(1);
// const [comment,setComment]=useState("");
// const [payment,setPayment]=useState("");
// const [shipping,setShipping]=useState("");


// function handleNameChange(event){
//     setName(event.target.value);
//  }
//  function handleQuantityChange(event){
//     setQuantity(event.target.value);
// }function handleCommentChange(event){
//     setComment(event.target.value);
// }function handlePaymentChange(event){
//     setPayment(event.target.value);
// }function handleShippingChange(event){
//     setShipping(event.target.value);
// }

// return(
//     <div>
//          <input value ={name} onChange ={handleNameChange}/>
//          <p>Name: {name}</p>
//          <input value ={quantity} onChange ={handleQuantityChange}/>
//          <p>Quantity: {quantity}</p>
//          <textarea value ={comment} onChange ={handleCommentChange} placeholder="Enter delivery place"/>
//         <p>Comment: {comment}</p>
//          <select value={payment} onChange ={handlePaymentChange}>
//             <option value="Select an option" >Select an option</option>
//              <option value="Visa" >Visa</option>
//              <option value="Debit Card" >Debit Card</option>
//              <option value="Master Card" >Master Card</option>
//          </select>
//          <p>Payment: {payment}</p>
//          <label>
//              <input type="radio"  value="Pick-Up" 
//             checked={shipping === "Pick-Up"} 
//             onChange={handleShippingChange}/>
//             Pick-up
//         </label><br/>
//         <label>
//             <input type="radio"  value="Delivery" 
//             checked={shipping === "Delivery"} 
//             onChange={handleShippingChange}/>
//             Delivery
//         </label>
//         <p>Shipping: {shipping}</p>
//     </div>
// );

//updater functions
//1.
                    // const [count,setCount]=useState(0);
                    // function increment(){
                    //     setCount(c=>c+1);   //this makes 0-3-6-9-...  if used three times
                    //     setCount(c=>c+1);
                    //     setCount(c=>c+1);
                    // }
                    // function reset(){
                    //     setCount(0);
                    // }
                    // function decrement(){
                    //     setCount(c=>c-1);
                    //     setCount(c=>c-1);  //-4 everytime
                    //     setCount(c=>c-1);
                    //     setCount(c=>c-1);

                    // }
                    // return(
                    //     <div className ="counter-cont">
                    //             <p className ="counter-disp">{count}</p>
                    //             <button className ="counter-button" onClick ={increment}>Increment</button>
                    //             <button className ="counter-button" onClick ={reset}>Reset</button>
                    //             <button className ="counter-button" onClick ={decrement}>Decrement</button>
                    //     </div>
                    // );
//2.
// const[car,setCar]=useState({year:2024,
//                             make:"Rolls Royce",
//                             model:"Phantom"});

// function handleYearChange(event){
//     setCar(c => ({...c, year: event.target.value}));
// }
// function handleMakeChange(event){
//     setCar(c=>({...c,make: event.target.value}));     //onChange not  onchange  C is Capital and same in onClick
// }
// function handleModelChange(event){
//     setCar(c=>({...c,model: event.target.value}));
// }
// return(
//     <div>
//         <p>Your favourite car is {car.model} made by {car.make} in {car.year}</p>
//         <input type ="text" value={car.model} onChange={handleModelChange}/><br/>
//         <input type ="text" value={car.make} onChange={handleMakeChange}/><br/>
//         <input type ="number" value={car.year} onChange={handleYearChange}/>

//     </div>
// );
            //update the state of an array

        // const[foods,setFoods]=useState(["apple","banana","citrus","drape","orange"]);
        // function handleAddFood(){
        //     const newFood =document.getElementById("foodInput").value;
        //     document.getElementById("foodInput").Value="";
        //      setFoods(f=> [...f,newFood]);  //either method can be used
        //     // setFoods(f=>({...f,newFood}));   //[] can be perplaced by({})
        // }
        // function handleRemoveFood(index){
        //     setFoods(foods.filter((_,i)=> i !== index));
        // }
        // return(
        //     <div>
        //         <h2>List of foods</h2>
        //         <ul>
        //             {foods.map((food,index)=>
        //             <li key = {index} onClick={()=>handleRemoveFood(index)}>
        //                 {food}
        //             </li>)}
        //         </ul>
        //         <input type = "text" id="foodInput" placeholder="Enter food name"/>
        //         <button onClick ={handleAddFood}>Add Food</button>
        //     </div>
        // );
//update the state of array objects

// const[cars,setCars]=useState([]);
// const[carYear,setCarYear]=useState(new Date().getFullYear());
// const[carMake,setCarMake]=useState("");
// const[carModel,setCarModel]=useState("");

// function handleAddCar(){
//     const newCar={year:carYear,make:carMake,model:carModel};
//     setCars(c => [...c,newCar]);
//     setCarYear(new Date().getFullYear());
//     setCarMake("");
//     setCarModel("");
// }
// function handleRemoveCar(index){
//     setCars(c =>c.filter((_,i)=> i !== index));
// }
// function handleYearChange(event){
//     setCarYear(event.target.value);
// }
// function handleMakeChange(event){
//     setCarMake(event.target.value);
// }
// function handleModelChange(event){
//     setCarModel(event.target.value);
// }
// // <br/>  is commonly used to break the line in the html code and is correct representation
// // </br> is not a correct representation of the break line in html code
// // _ denotes that ignore that parameter
// return(                  
//     <div>
//             <h2>List of Car Objects</h2>
//             <ul>
//                 {cars.map((cars,index)=>
//                 <li key ={index} onClick ={ ()=> handleRemoveCar(index)}>
//                     {cars.make} made {cars.model} model in {cars.year}
//                 </li>)}
//             </ul>
//             <input type ="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br/>
//             <input type ="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br/>
//             <input type ="number" value={carYear} onChange={handleYearChange}/><br/>
//             <button onClick ={handleAddCar}>Add Car</button>
//     </div>   
// );

//UseEffect React Hook
//useEffect() = React Hook that tells REACT DOsome code when (pick one):
//This component re renders
//This componenet mounts
//The state of a  value 

//useEffcet(function,[dependencies])

//1.useEffect(() => {})-----Runs after every re-render
//2.useEffect(() => {},[])---Runs only on mount
//3.useEffect(() => {},[value])---Runs on mount + when value changes

//USES
//Event listeners
//DOM Manipultion
//Subscriptions(real-time updates)
//fetching data from an api
//clean up when the comonent unmounts(Removing the component from the dom)

//1.
// const [count,setCount]=useState(0);
// const [color,setColor]=useState("green");

// useEffect(()=>{              
//     document.title= `My counter program: ${count} ${color}`;   //even the tab title shows the increase of the count on evert click
// },[count,color]);    //if we add the empty array of dependencies the incerement does not happen in the title

// function addcount(){
//     setCount(c => c+1);
// }
// function subtractcount(){
//     setCount(c => c-1);
// }
// function changecolor(){
//     setColor(c => c === "green"?"red":"green");
// }

//     return(<>
//         <p style={{color: color}}>Count:{count}</p>
//         <button onClick={addcount}>Add</button>
//         <button onClick={subtractcount}>Subtract</button><br/>
//         <button onClick={changecolor}>Change Color</button><br/>


//     </>)

//2.
// const[width,setWidth]=useState(window.innerWidth);
// const[height,setHeight]=useState(window.innerHeight);
// useEffect(()=>{
//         window.addEventListener("resize",handleResize);
//         console.log("EVENT LISTENER ADDED");
//     return () =>{
//         window.removeEventListener("resize",handleResize);
//         console.log("EVENT LISTENER REMOVED");
// }
// }, []);
// useEffect(()=>{
//     document.title =`Size: ${width} x ${height}`;
// },[width,height]);
// function handleResize(){
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);

// }
// return(
//     <>
//         <p>Window Width:{width}px</p>
//         <p>Window Height:{height}px</p>
//     </>
// );

// useRef() useReference

    // let [number,setNumber]=useState(0);
    //instead of using state variable we use the reference variable
    
    // const ref =useRef(0);
    // const inputRef1 =useRef(null);
    // const inputRef2 =useRef(null);
    // const inputRef3 =useRef(null);
    // const inputRef4 =useRef(null);


    // console.log(ref);

//     useEffect(() => {
//         console.log("COMPONENT RENDERED");
//         // console.log(inputRef);
//     });
//     function handleClick1(){
//         // setNumber(n => n+1);
//         // ref.current++;
//         // console.log(ref.current);
//         inputRef1.current.focus();
//         inputRef1.current.style.backgroundColor = "yellow";
//         inputRef2.current.style.backgroundColor = "";
//         inputRef3.current.style.backgroundColor = "";
//         inputRef4.current.style.backgroundColor = "";
//     }
//     function handleClick2(){
//         inputRef2.current.focus();
//         inputRef1.current.style.backgroundColor = "";
//         inputRef2.current.style.backgroundColor = "yellow";
//         inputRef3.current.style.backgroundColor = "";
//         inputRef4.current.style.backgroundColor = "";
//     }
//     function handleClick3(){
//         inputRef3.current.focus();
//         inputRef1.current.style.backgroundColor = "";
//         inputRef2.current.style.backgroundColor = "";
//         inputRef3.current.style.backgroundColor = "yellow";
//         inputRef4.current.style.backgroundColor = "";
//     }
//     function handleClick4(){
//         inputRef4.current.focus();
//         inputRef1.current.style.backgroundColor = "";
//         inputRef2.current.style.backgroundColor = "";
//         inputRef3.current.style.backgroundColor = "";
//         inputRef4.current.style.backgroundColor = "yellow";
//     }
//     return(
//         <div>
//             <button onClick={handleClick1}>
//                  Click me 1
//              </button>
//              <input ref={inputRef1}/><br/>
//              <br/><hr/>
//              <button onClick={handleClick2}>
//                  Click me 2
//              </button>
//              <input ref={inputRef2}/><br/>
//              <br/><hr/>
//              <button onClick={handleClick3}>
//                  Click me 3
//              </button>
//              <input ref={inputRef3}/><br/>
//              <br/><hr/>
//              <button onClick={handleClick4}>
//                  Click me 4
//              </button>
//              <input ref={inputRef4}/><br/>
//              <hr/>
//         </div>
//     );
 }
 export default Mycomp
