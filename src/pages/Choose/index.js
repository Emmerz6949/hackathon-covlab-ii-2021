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
                <Option id="1" key="1" link="chemistry" text="Chemistry"/>
                <Option id="2" key="2" link="biology" text="Biology"/>
                <Option id="3" key="3" link="physics" text="Physics"/>
            </main>
        );
    }
}

export default Choose;
