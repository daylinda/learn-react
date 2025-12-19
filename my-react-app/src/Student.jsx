// import PropTypes from "prop-types";


function Student(props){
    return(
        <div className="student-card">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Student Status: {props.isStudent ? "Yes" : "No"}</p>
        </div>

    );
}

//good practice to define prop types if using props
Student.prototypes ={
    name: String,
    age: Number,
    isStudent: Boolean
}

Student.defaultProps = {
    name: "Unknown",
    age: 18,
    isStudent: false
}

export default Student;