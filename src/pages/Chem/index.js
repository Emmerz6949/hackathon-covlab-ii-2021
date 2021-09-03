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
            </div>
        </main>
    );
}

export default Chem;
