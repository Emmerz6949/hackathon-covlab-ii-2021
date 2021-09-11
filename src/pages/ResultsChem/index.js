import React from "react";
import { Link } from "react-router-dom";
import Pink from '../Chem/flasks/pinkSolutionFlask.png';
import Clear from '../Chem/flasks/clearSolutionFlask.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const styles = {
    divStyle: {
        width: "50%"
    },
    imgStyle: {
        width: "15%"
    }
};

function ResultsChem() {
    return(
        <main>
            <div className="mx-auto mt-5 bg" style={styles.divStyle}>
                <h2 className="text-decoration-underline">Chemistry Experiment Explained</h2>
                <p className="fw-bold">
                    This experiment utilized a hot plate, and a solution made up of 500ml of water, a drop of concentrated ammonia,
                        and a few drops of phenolphthalein (a pH indicator). 
                </p>
                <p className="fw-bold">
                    At room temperature the solution was pink, but when heated up the solution was clear. This occurs due to 
                        the shift of the equilibrium between the ionized ammonium hydroxide and the un-ionized ammonia. 
                </p>
                <p className="fw-bold">
                    The shift of 
                        the equilibrium causes the pH of the solution to lower towards acidic, which in turn changes the color that the 
                        phenolphthalein indicates from pink to clear. 
                </p>
                <p className="fw-bold">
                    When the solution cools off the equilibrium shifts back causing the 
                        pH of the solution to raise towards alkaline, which in turn changes the color that the phenolphthalein indicates from 
                        clear back to pink.
                </p>
                <img src={Pink} className="pb-3 px-2 bg" style={styles.imgStyle} alt="a flask containing a pink solution" />
                <i class="fs-3 p-3 bi bi-arrow-left-right"></i>
                <img src={Clear} className="pb-3 px-2 bg" style={styles.imgStyle} alt="a flask containing a clear solution" />
                <div>
                    <h4 className="btn fs-4 border-dark border-3 rounded-pill bg mt-4"><Link to="/hackathon-covlab-ii-2021/" className="text-decoration-none text-reset">Home</Link></h4>
                </div>
                <p className="fst-italic mt-5">Resources: <a className="text-dark" href="https://sciencenotes.org/hot-and-cold-color-change-chemistry-demonstration/">https://sciencenotes.org/hot-and-cold-color-change-chemistry-demonstration/</a></p>
            </div>
        </main>
    );
}

export default ResultsChem;
