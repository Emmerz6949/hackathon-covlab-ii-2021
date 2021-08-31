import React from "react";
import Sci from "./sci/science.png";

const styles = {
    cardStyle: {
        margin: "0px auto",
        width: "50%"
    }
};

function Home() {
    return(
        <main>
            <div className="card border-0" style={styles.cardStyle}>
                <img src={Sci} className="card-img-top" alt="a blue oval containing the underlined words 'Science-rific Labs'"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </main>
    );
}

export default Home;
