function Button1(){
    // const handleClick =() => console.log("Uffff!");
    // const handleClick1 =(name) => console.log(`${name} stop clicking me`);
            // let count =0;
            // const handleClick =(name) =>{
            //     if(count < 5){
            //         count++;
            //         if(count == 1){
            //         console.log(`${name} you clicked me ${count} time`);
            //         }
            //         else{
            //             console.log(`${name} you clicked me ${count} times`);
            //         }
            //     }
            //     else{
            //         console.log(`${name} stop clicking me!`);
            //     }
            // };
        const handleClick =(e) => e.target.textContent ="Ufff! 🥴";
    



    return(
    // <button onClick={handleClick1 ("Nithin")}>Click Me 😀</button>   //only few times if clicked
    // <button onClick={() => handleClick1 ("Nithin")}>Click Me 😀</button>  //clicked for mny times
    // <button onClick={() => handleClick ("Nithin")}>Click Me 😀</button> 
     <button onDoubleClick={(e) => handleClick (e)}>Click Me 😀</button>  //onClick for single click reaction and onDoubleClick for the double click reaction



    );
}
export default Button1;