import React from "react";
import "./Banner.css";
import banner1 from "./../../../images/banner1.webp";

const Banner = () => {
    return (
        <div
            className="banner-section"
            style={{ backgroundImage: `url(${banner1})` }}
        ></div>
    );
};

export default Banner;
