import React from 'react';
import { Link } from "react-router-dom";

function Option(props) {
    let toDest = `"/hackathon-covlab-ii-2021/${props.link}"`;

    return(
        <h4 className=" btn fs-4 border-dark border-3 rounded-pill bg mt-5"><Link to={toDest} className="text-decoration-none text-reset">{props.text}</Link></h4>
    );
}

export default Option;
