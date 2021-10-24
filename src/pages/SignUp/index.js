import React from "react";
import { Link } from "react-router-dom";

const styles = {
    divStyle: {
        width: "50%"
    },
    inputStyle: {
        width: "75%"
    }
};

function SignUp() {
    return(
        <main>
            <div className="mx-auto mt-5 bg" style={styles.divStyle}>
                <h2 className="text-decoration-underline">Sign Up</h2>
                <form className="signup">
                    <div className="form-group">
                        <label for="email-input" className="fs-5">Email Address</label>
                        <input type="email" className="form-control mx-auto" id="email-input" placeholder="Email" style={styles.inputStyle}/>
                    </div>
                    <div className="form-group">
                        <label for="password-input" className="fs-5">Password</label>
                        <input type="password" className="form-control mx-auto" id="password-input" placeholder="Password" style={styles.inputStyle}/>
                    </div>
                    <h5 className="btn fs-5 border-dark border-3 rounded-pill bg mt-3">Sign Up</h5>
                </form>
                <h5>or</h5>
                <h5 className="btn fs-5 border-dark border-3 rounded-pill bg">Login</h5>
            </div>
        </main>
    );
}

export default SignUp;
