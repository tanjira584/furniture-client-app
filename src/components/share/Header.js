import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import logo from "./../../images/logo.avif";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <section className="header-top d-none d-md-block">
                <div className="container-md">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="m-0 text-light">
                                Follow Half Price Furniture Warehouse On
                                Facebook
                            </p>
                        </div>
                        <div>
                            <button className="text-light">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faEnvelope}
                                ></FontAwesomeIcon>{" "}
                                Subscribe & Save
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="header-main">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-md">
                        <Link className="navbar-brand logo" to="/">
                            <img src={logo} alt="" />
                        </Link>

                        <button
                            className="navbar-toggler text-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav main-menu ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/inventory">
                                        Inventory
                                    </Link>
                                </li>
                                {user ? (
                                    <li className="nav-item">
                                        <button
                                            onClick={() => signOut(auth)}
                                            className="border-0 bg-transparent nav-link text-light"
                                        >
                                            Signout
                                        </button>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Header;
