import React from "react";
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
                        <Items></Items>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;
