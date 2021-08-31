import React from "react";
import Sci from "./sci/science.png";

function Home() {
    return(
        <main>
            <div className="card">
                <img src={Sci} className="card-img-top" alt="a blue oval containing the underlined words 'Science-rific Labs'"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </main>
    );
}

export default Home;
