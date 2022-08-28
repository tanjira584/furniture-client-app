import React from "react";
import "./ProductDetails.css";
import sofa from "./../../../images/sofa1.jpg";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
    return (
        <div className="product-details">
            <Header></Header>
            <div className="container-md py-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="product-img p-4 border">
                            <img style={{ width: "100%" }} src={sofa} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-info p-4 border">
                            <h4>
                                Lane Tessa Alabaster Loveseat with Alabaster
                                Pearl and Gorgeous Nature Accent Pillows
                            </h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="rating-icons">
                                    <ul className="d-inline">
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                    </ul>
                                    <span className="text-muted ms-2">
                                        No Review
                                    </span>
                                </div>
                                <div className="social-icons">
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                className="icon"
                                                icon={faStar}
                                            ></FontAwesomeIcon>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="">
                                    <div className="price">
                                        <p className="m-0">
                                            Price: <span>$599</span>
                                        </p>
                                    </div>
                                    <div className="price">
                                        <p className="m-0">
                                            Quantity: <span>10</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between">
                                    <div className="w-50">
                                        <p className="m-0 fw-bold">
                                            Supplyer:{" "}
                                            <span className="fst-italic">
                                                XYZ@gmil.com
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-50 text-end">
                                        <button className="delever-btn">
                                            Delevered
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="update-form border p-4 mt-4 d-flex justify-content-between">
                            <div>
                                <h4 className="mb-3">Update Stock</h4>
                                <p className="m-0">
                                    On Stock: <span>10</span>
                                </p>
                            </div>
                            <form action="">
                                <input type="text" />
                                <input type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-desc p-4 border">
                            <h4 className="mb-3">Description</h4>
                            <p className="">
                                Criss-cross lattice overlays the two glass
                                fronted door and sides which flank the central
                                open shelves in this inviting and oh-so-useful
                                new credenza. With three drawers above for even
                                more storage options, and an attractive Mabry
                                Mill Burnished Blue, endless possibilities are
                                at your fingertips!
                            </p>
                            <p>
                                A sprung slatted base gives natural bounce,
                                adjusting to where pressure is most exerted to
                                provide greater comfort.
                            </p>
                            <p>
                                The maximum weight load for this frame is 100
                                kg.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
