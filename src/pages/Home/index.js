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
            <div id="home" className="card border-0" style={styles.cardStyle}>
                <img src={Sci} className="card-img-top" alt="a blue oval containing the underlined words 'Science-rific Labs'"/>
                <div className="card-body pt-0">
                    <h2 className="card-title btn fs-2 border-dark border-3 rounded-pill bg">Let's Get Started!</h2>
                </div>
            </div>
        </main>
    );
}

export default Home;
