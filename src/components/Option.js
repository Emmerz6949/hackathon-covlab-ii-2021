import React from 'react';
import { Link } from "react-router-dom";

function Option(props) {
    return(
        <h4 className=" btn fs-4 border-dark border-3 rounded-pill bg mt-5">{props}</h4>
    );
}

export default Option;
