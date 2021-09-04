import React, { Component } from "react";
import Pink from './flasks/pinkSolutionFlask.png';
import Clear from './flasks/clearSolutionFlask.png';
import PinkOff from './flasks/pinkSolutionFlaskOffPlate.png';
import ClearOff from './flasks/clearSolutionFlaskOffPlate.png';
import PinkOn from './flasks/pinkSolutionFlaskOnPlate.png';
import ClearOn from './flasks/clearSolutionFlaskOnPlate.png';
import Step from '../../components/Step';
import steps from '../../steps.json';

const styles = {
    divStyle: {
        width: "50%"
    },
    imgStyle: {
        width: "15%"
    }
};

class Chem extends Component {

    state = {
        hotPlate: false,
        heated: false,
        steps
    }

    render() {
        return(
            <main>
                <div className="mx-auto mt-5 bg" style={styles.divStyle}>
                    <h2 className="text-decoration-underline">Chemistry Experiment</h2>
                    <p className="fw-bold">
                        This expermint utilizes a hot plate, and a solution made up of 500ml of water, a drop of concentrated ammonia,
                         and a few drops of phenolphthalein indicator. At room temperature the solution will be pink due to the pH of the concentrated ammonia.
                    </p>
                    <div>
                        <img src={Pink} className="pb-3 bg" style={styles.imgStyle} alt="a flask containing a pink solution" />
                        <p className="fw-bold">
                            Now let's try heating the solution using the hot plate!
                        </p>
                        <h5 className="btn fs-5 border-dark border-3 rounded-pill bg">Continue</h5>
                    </div>
                </div>
            </main>
        );
    }
}

export default Chem;
