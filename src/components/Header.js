import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Header(props) {
    const location = useLocation();

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-opacity-75">
                <h1 className="navbar-brand mb-0"><Link to="/hackathon-covlab-ii-2021/" className="text-decoration-none text-reset">Science-rific Labs</Link></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/hackathon-covlab-ii-2021/" className={location.pathname === "/hackathon-covlab-ii-2021/" ? "nav-link active" : "nav-link"}>Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
