import React from "react";
import "./StoreSection.css";
import store from "./../../../images/store.jpg";
const StoreSection = () => {
    return (
        <div className="store-area">
            <div className="container-md">
                <div className="section-title mb-4">
                    <h2>Our Stores</h2>
                </div>
                <div className="row g-0">
                    <div className="col-md-5 border">
                        <div className="store-content p-4">
                            <h4>Half Price Furniture Warehouse</h4>
                            <p>
                                Unit B, 118, Birmingham Road, Lichfield,
                                Staffordshire, WS14 9BW
                            </p>
                            <ul className="m-0 p-0 mb-4">
                                <li>Monday - Friday: 10:00 - 17:30</li>
                                <li>Saturday: 9:30- 17:00</li>
                                <li>Sunday: 11:00-16:00</li>
                            </ul>
                            <button>Get Directions</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="store-img ">
                            <img src={store} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreSection;
