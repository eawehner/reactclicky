import React from "react";

//this is where front-end code for the navbar will be written to be exported as a component
class Nav extends React.Component {

    render() {
        return(
            <div>
                {/* code for the initial header would go here, just a simple header formated through bootstrap */}

                {/* code for the score tracker would go here;
                    the score would add +1 to the state through this.state.score
                    the score would be displayed   */}
            </div>
        )
    }
};

export default Nav;