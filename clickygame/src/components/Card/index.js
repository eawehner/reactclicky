import React from "react";
import "./card.css";

//setting up our card html for each card, using props.img to pull in the image
//and setting up an id through props.id for our key and using props.clicked to track the individual clicked value of each card
function Card(props) {
    return (
        <div className="col-sm-4">
            <div className="card" id={props.id} data-clicked={props.clicked} onClick={props.clickEvent}>
                <div className="card-body">
                    <img src={props.img} alt={props.name} />
                </div>
            </div>
        </div>
    );
}

export default Card;