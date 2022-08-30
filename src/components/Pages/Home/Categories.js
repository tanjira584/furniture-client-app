import React from "react";
import "./Categories.css";
import living from "./../../../images/room1.jpg";
import table from "./../../../images/table1.jpg";
import chair from "./../../../images/chair1.jpg";
import sofa from "./../../../images/sofa1.jpg";
import loveseat from "./../../../images/loveseat.jpg";
import media from "./../../../images/media1.jpg";

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
                            <a href="/">
                                <div className="img">
                                    <img src={living} alt="" />
                                </div>
                                <p className="m-0">Living Room Sets</p>{" "}
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/">
                                <div className="img">
                                    <img src={table} alt="" />
                                </div>
                                <p className="m-0">Tables</p>{" "}
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/">
                                <div className="img">
                                    <img src={chair} alt="" />
                                </div>
                                <p className="m-0">Chairs</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/">
                                <div className="img">
                                    <img src={sofa} alt="" />
                                </div>
                                <p className="m-0">Sofa</p>{" "}
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border border-end-0">
                            {" "}
                            <a href="/">
                                <div className="img">
                                    <img src={loveseat} alt="" />
                                </div>
                                <p className="m-0">Loveseat</p>{" "}
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="catagory border">
                            <a href="/">
                                <div className="img">
                                    <img src={media} alt="" />
                                </div>
                                <p className="m-0">Media Center </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
