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
        pink: true,
        steps
    }

    handleContinue0 = () => {
        this.setState({ hotPlate: true });
        this.setState({ heated: false });
        this.setState({ pink: true });
    }

    renderStep = () => {
        if (this.state.hotPlate === false && this.state.heated === false) {
            return(
                <Step
                    imgSrc={Pink}
                    imgStylin={styles.imgStyle}
                    altText={steps[0].altText}
                    pText={steps[0].pText}
                    handleContinue={this.handleContinue0}
                    btnText="Continue"
                />
            );
        }
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
                    {this.renderStep()}
                </div>
            </main>
        );
    }
}

export default Chem;
