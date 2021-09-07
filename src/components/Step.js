import React from "react";

function Step(props) {
    return(
        <div>
            <img src={props.imgSrc} className="pb-3 bg" style={props.imgStylin} alt={props.altText} />
            <p className="fw-bold">
                {props.pText}
            </p>
            <h5 className="btn fs-5 border-dark border-3 rounded-pill bg" onClick={props.handleContinue}>{props.btnText}</h5>
        </div>
    );
}

export default Step;
