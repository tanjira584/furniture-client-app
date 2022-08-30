import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import "./Inventory.css";
import Items from "./Items";
import Sidebar from "./Sidebar";

const Inventory = () => {
    return (
        <div>
            <Header></Header>
            <div className="container-md my-5 py-5">
                <div className="row g-4">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <div className="d-flex align-items-center justify-content-between mb-4 px-3">
                            <div>
                                <h4 className="m-0">All Products Goes Here</h4>
                            </div>
                            <div className="add-btn">
                                <Link to="/add-item">Add New Item</Link>
                            </div>
                        </div>
                        <Items></Items>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;
