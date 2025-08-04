import PropTypes from 'prop-types'
function Student(props){     //props is javascript object
    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Married: {props.isMarried ? "Yes" : "No"}</p>
            <p>Designation : {props.designation}</p>
            <p>Salary : {props.salary}</p>
        </div>

    );

}
Student.proptypes ={
    name : PropTypes.string,
    age : PropTypes.number,
    isMarried : PropTypes.bool,
    designation : PropTypes.string,
    salary : PropTypes.number,    
}
Student.defaultProps= {
    name : "Guest",
    age : 0,
    isMarried : false,
    designation :"unknown",
    salary : 0,
}
export default Student