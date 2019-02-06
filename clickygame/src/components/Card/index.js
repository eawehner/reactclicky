import React from "react";
import "./card.css";

//setting up our card html for each card, using props.img to pull in the image
//and setting up an id through props.id for our key and also using it to track the individual clicked value of each card
function Card(props) {
    return (
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <img src={props.img} id={props.id} onClick={props.clickEvent} alt={props.name} />
                </div>
            </div>
        </div>
    );
}

export default Card;