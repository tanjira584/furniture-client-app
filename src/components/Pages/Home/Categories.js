import React from "react";
import "./Categories.css";
import living from "./../../../images/room1.jpg";
import table from "./../../../images/table1.jpg";
import chair from "./../../../images/chair1.jpg";
import sofa from "./../../../images/sofa1.jpg";
import loveseat from "./../../../images/loveseat.jpg";
import media from "./../../../images/media1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
    return (
        <div className="category-area">
            <div className="container-md">
                <div className="section-title mb-4">
                    <h2>Our Categories</h2>
                </div>
                <div className="row g-0">
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            <a href="/products?category=living room sets">
                                <div className="img">
                                    <img src={living} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">
                                        Living Room Sets
                                        <FontAwesomeIcon
                                            className="arrow-icon"
                                            icon={faArrowRight}
                                        ></FontAwesomeIcon>
                                    </p>{" "}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/products?category=tables">
                                <div className="img">
                                    <img src={table} alt="" />
                                </div>
                                <div>
                                    {" "}
                                    <p className="m-0">
                                        Tables
                                        <FontAwesomeIcon
                                            className="arrow-icon"
                                            icon={faArrowRight}
                                        ></FontAwesomeIcon>
                                    </p>{" "}
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/products?category=sofa">
                                <div className="img">
                                    <img src={sofa} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">
                                        Sofa
                                        <FontAwesomeIcon
                                            className="arrow-icon"
                                            icon={faArrowRight}
                                        ></FontAwesomeIcon>
                                    </p>{" "}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/products?category=loveseat">
                                <div className="img">
                                    <img src={loveseat} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">
                                        Loveseat
                                        <FontAwesomeIcon
                                            className="arrow-icon"
                                            icon={faArrowRight}
                                        ></FontAwesomeIcon>
                                    </p>{" "}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/products?category=chairs">
                                <div className="img">
                                    <img src={chair} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">
                                        Chairs
                                        <FontAwesomeIcon
                                            className="arrow-icon"
                                            icon={faArrowRight}
                                        ></FontAwesomeIcon>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border">
                            <a href="/products?category=media center">
                                <div className="img">
                                    <img src={media} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">
                                        Media Center
                                        <FontAwesomeIcon
                                            className="arrow-icon"
                                            icon={faArrowRight}
                                        ></FontAwesomeIcon>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
