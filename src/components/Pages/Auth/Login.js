import React, { useState } from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import "./Login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import google from "./../../../images/google.svg";
import { toast } from "react-toastify";
import {
    useSignInWithGoogle,
    useSignInWithEmailAndPassword,
    useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [authuser] = useAuthState(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, euser, eloading, eerror] =
        useSignInWithEmailAndPassword(auth);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(user.email, user.password);

        e.target.reset();
        setUser({ email: "", password: "" });
    };
    const handleGoogle = (e) => {
        signInWithGoogle();
    };
    if (authuser || euser || guser) {
        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email: authuser.email }),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
            });

        return <Navigate to={from}></Navigate>;
    }
    if (gloading || eloading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    if (euser || guser) {
    }
    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <div className="login-form w-50 mx-auto border shadow p-4 my-5">
                    <div>
                        <h2>Please Login</h2>
                        <p className="mb-4">
                            In order to proceed, please Login. If you do not
                            have an account with us, please create a new one by
                            following the link below.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input type="submit" value="Login Now" />
                            </div>
                        </form>

                        <div className="d-flex justify-content-between align-items-center mb-4 reset-btn mt-3">
                            <div>
                                <button>Forgot Password</button>
                            </div>
                            <div>
                                <Link to="/signup">Create Account</Link>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50 border"></div>
                            <div className="mx-4">Or</div>
                            <div className="w-50 border"></div>
                        </div>
                        <div className="mt-4 google-btn">
                            <button onClick={handleGoogle}>
                                {" "}
                                <img src={google} alt="" /> Continue With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
