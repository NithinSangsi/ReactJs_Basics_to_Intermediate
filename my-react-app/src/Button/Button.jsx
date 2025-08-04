import styles from './Button.module.css'
function Button1(){
    return(
        // <button className="button">Click me</button>   -- for external
        <button className={styles.button}>Click me</button> 
    );  
}
export default Button1