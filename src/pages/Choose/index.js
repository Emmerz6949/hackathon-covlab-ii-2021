import React, { Component } from "react";
import Option from "../../components/Option";
import options from "../../options.json";

class Choose extends Component {

    state = {
        options
    };

    render() {
        return(
            <main>
                <h2 className="border border-dark border-3 rounded-pill bg mt-5">Choose Your Science</h2>
                {this.state.options.map(option => (
                    <Option id={option.id} key={option.id} link={option.link} text={option.text} />
                ))}
            </main>
        );
    }
}

export default Choose;
