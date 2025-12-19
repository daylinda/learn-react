import React from "react";
import profilePic from './assets/Avatar_Davina.png';


function Card(){
    return (
        <div className="card" >
            <img className="card-image" src={profilePic}  alt="Profile Picture"></img>
            <h2 className="card-title">Davina</h2>
            <p className="card-text">Me learning Javascript React</p>
        </div>
    );
}

export default Card;