import {
    faFacebookSquare,
    faInstagramSquare,
    faLinkedin,
    faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import secure from "./../../images/secure.gif";

const Footer = () => {
    return (
        <div>
            <section className="footer-top">
                <div className="container-fluid">
                    <div className="row g-4">
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-box">
                                <h6>Company Links</h6>
                                <hr />
                                <ul>
                                    <li>
                                        <a href=" ">About us</a>
                                    </li>
                                    <li>
                                        <a href=" ">Locations</a>
                                    </li>
                                    <li>
                                        <a href=" ">Community</a>
                                    </li>
                                    <li>
                                        <a href=" ">Contact us</a>
                                    </li>
                                    <li>
                                        <a href=" ">My Account</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-box">
                                <h6>More Links</h6>
                                <hr />
                                <ul>
                                    <li>
                                        <a href=" ">Privacy</a>
                                    </li>
                                    <li>
                                        <a href=" ">Policies</a>
                                    </li>
                                    <li>
                                        <a href=" ">Furniture Sheild</a>
                                    </li>
                                    <li>
                                        <a href=" ">Frequently Question</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-box">
                                <h6>Information</h6>
                                <hr />
                                <ul>
                                    <li>
                                        <a href=" ">Services</a>
                                    </li>
                                    <li>
                                        <a href=" ">Domestic Delivery</a>
                                    </li>
                                    <li>
                                        <a href=" ">Export Shipping</a>
                                    </li>
                                    <li>
                                        <a href=" ">Contact us</a>
                                    </li>
                                    <li>
                                        <a href=" ">Finance Options</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-box">
                                <h6>Careers</h6>
                                <hr />
                                <ul>
                                    <li>
                                        <a href=" ">Current Open Positions</a>
                                    </li>
                                    <li>
                                        <a href=" ">Working with Us</a>
                                    </li>
                                    <li>
                                        <a href=" ">Online Application</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-box">
                                <h6>Stay Connected</h6>
                                <hr />
                                <ul className="d-flex">
                                    <li className="me-3">
                                        <a href=" ">
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faFacebookSquare}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href=" ">
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faYoutubeSquare}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href=" ">
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faInstagramSquare}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li className="me-3">
                                        <a href=" ">
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faLinkedin}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-box">
                                <h6>Secure Gateway</h6>
                                <hr />
                                <div>
                                    <img src={secure} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom py-3">
                <div className="container-md">
                    <p className="m-0 text-center text-light">
                        2022 &copy; The Furniture Warehouse | All Rights
                        Reserved
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Footer;
