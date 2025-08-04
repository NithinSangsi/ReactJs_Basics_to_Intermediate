import PropTypes from 'prop-types';
function UserGreeting(props){

    // if(props.isloggedin){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2> Please log in to continue</h2>
    // // }
    // return (props.isloggedin ? <h2 className="wel-mes">Welcome {props.username}</h2> : 
    //                            <h2 className="log-prom">Please login to continue</h2>);

        const welmes = <h2 className="wel-mes">
                        Welcome {props.username}</h2>
        const logprom =  <h2 className="log-prom">
                        Please login to continue</h2>
        return(props.isloggedin ? welmes : logprom); 
}
        
    UserGreeting.proptypes ={
        isloggedin : PropTypes.bool,
        username: PropTypes.string,
    }
    UserGreeting.defaultProps ={
        isloggedin : false,
        username: "Guest",
    }

export default UserGreeting