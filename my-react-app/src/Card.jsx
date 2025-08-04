import ProfilePic from './assets/suit1.png'

function Card(){
    return(
        <>
            <div className="card">      {/*with jsx we use className   not class(it is a reserved word) */}
            <img className="card-img" src={ProfilePic} alt="" ></img>
            <h2 className="card-title">Nithin Sangsi</h2>
            <p className="card-txt">I am 22 Year old guy</p>
           </div>
        </>

    );
}
export default Card