  function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "black",
        padding: "10px, 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return(
        //<button className="button">Click me</button>   //-- for external
        // <button className={styles.button}>Click me</button>   -- for module
         <button style={styles}>Click me</button>
    );
}
export default Button