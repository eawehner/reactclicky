import React from "react";

//this is where front-end code for the navbar will be written to be exported as a component
function Nav(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* code for the initial header would go here, just a simple header formated through bootstrap */}
            <span className="navbar-brand">FFXIV-Clicky!</span>

            {/* code for the score tracker would go here;
                    the score would add +1 to the state through this.state.score
                    the score would be displayed   */}
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><span className="nav-link" id="score">Score: {props.score}</span></li>
                <li className="nav-item active"><span className="nav-link" id="highScore">High Score: {props.highScore}</span></li>
            </ul>
        </nav>
    )
};

export default Nav;