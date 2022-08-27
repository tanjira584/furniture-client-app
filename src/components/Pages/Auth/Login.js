import React, { useState } from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    const hangleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };
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
                            <div class="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    onChange={hangleChange}
                                />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    onChange={hangleChange}
                                />
                            </div>
                            <div>
                                <input type="submit" value="Login Now" />
                            </div>
                        </form>

                        <div className="d-flex justify-content-between align-items-center mb-4 reset-btn mt-3">
                            <div>
                                <Link to="/signup">Create Account</Link>
                            </div>
                            <div>
                                <button>Forgot Password</button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="w-50 border"></div>
                            <div className="mx-4">Or</div>
                            <div className="w-50 border"></div>
                        </div>
                        <div className="mt-4 google-btn">
                            <button>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
