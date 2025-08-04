function Propic(){
    const imageUrl =`./src/assets/suit1.png`;
    // const handleClick =() => console.log("Uffff!");
    const handleClick1 =(e) => e.target.style.display ="none";

    return(
        // <img onClick={handleClick} src={imageUrl} alt ="suitImage"/>
        <img onClick={(e) => handleClick1(e)} src={imageUrl} alt ="suitImage"/>
    );
}
export default Propic;