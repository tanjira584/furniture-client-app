import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import logo from "./../../images/logo.avif";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
                <nav class="navbar navbar-expand-lg">
                    <div class="container-md">
                        <a class="navbar-brand logo" href="/">
                            <img src={logo} alt="" />
                        </a>
                        <button
                            class="navbar-toggler text-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon text-light"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav main-menu ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a
                                        class="nav-link"
                                        aria-current="page"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href=" ">
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Header;
