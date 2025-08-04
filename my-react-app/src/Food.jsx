function Food(){

    const food1 ="Apple";
    const food2 ="Banana";
    return(
        // <> and </> this is used when there are multiple parents like in below the h1 and the ul 
        <>
        <h1>Food List</h1>
        <ul>
            <li>Drape Seeds</li>
            <li>{food1}</li>
            <li>{food2.toLowerCase()}</li>     {/*we can use janascript methods here */}
        </ul>
        </>
    );
}
export default Food