import React from "react";
import "./Banner.css";
import banner1 from "./../../../images/banner1.webp";

const Banner = () => {
    return (
        <div
            className="banner-section"
            style={{ backgroundImage: `url(${banner1})` }}
        >
            <div className="overlay">
                <div className="container-md">
                    <div className="banner-content">
                        <h2>Stunning Bedroom Furniture</h2>
                        <button>Shop Bedroom now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
