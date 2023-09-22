import React from "react";
import './Introduction.css';

const Introduction = () => {
    return (
        <div className="d-flex h-full home-bg">
            <div className="m-auto">
                <span className="greet">HELLO !</span><br/>
                <span>I am Web Developer and UI Designer</span><br/>
                <button className="btn btn-outline-dark my-3"> Check More ! </button>
            </div>
        </div>
    )
}

export default Introduction;