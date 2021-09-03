import React from 'react';

const styles = {
    divStyle: {
        width: "50%"
    }
};

function Chem() {
    return(
        <main>
            <div className="mx-auto mt-5 bg" style={styles.divStyle}>
                <h2 className="text-decoration-underline">Chemistry Experiment</h2>
                <p className="fw-bold">
                    This expermint utilizes a hot plate, and a solution made up of 500ml of water, a drop of concentrated ammonia,
                     and a few drops of phenolphthalein indicator. At room temperature the solution will be pink due to pH of the concentrated ammonia.
                </p>
            </div>
        </main>
    );
}

export default Chem;
