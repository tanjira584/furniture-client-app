import React, { useState } from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
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
                <div className="signup-form w-50 mx-auto border shadow p-4 my-5">
                    <div>
                        <h2>Create New Account</h2>
                        <p className="mb-4">
                            Please take a moment to enter the requested
                            information below. Your phone number will be used as
                            your main account number.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter name"
                                    onChange={handleChange}
                                />
                            </div>
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <input type="submit" value="Create Account" />
                            </div>
                        </form>
                        <div className="d-flex justify-content-between align-items-center mb-3 reset-btn mt-2">
                            <div></div>
                            <div>
                                <Link to="/login">Back to Login</Link>
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

export default Signup;
