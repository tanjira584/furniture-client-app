import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQty] = useState(0);
    const [product, setProduct] = useState({});
    const [refetch, setRefetch] = useState(false);

    const handleQuantity = (e) => {
        const qty = parseInt(e.target.value);
        setQty(qty);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/product/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Stock Update Successfully");
                    setRefetch(!refetch);
                    setQty(0);
                    e.target.reset();
                }
            });
    };
    const handleDelevered = (e) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "PUT",
            headers: {
                delevered: true,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Product Deleverd Successfully");
                    setRefetch(!refetch);
                }
            });
    };
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id, refetch]);
    return (
        <div className="product-details">
            <Header></Header>
            <div className="container-md py-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="product-img p-4 border">
                            <img
                                style={{ width: "100%" }}
                                src={product.img}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-info p-4 border">
                            <h4 className="mb-3">{product.name}</h4>
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
                                            Price: <span>${product.price}</span>
                                        </p>
                                    </div>
                                    <div className="price">
                                        <p className="m-0">
                                            Quantity:{" "}
                                            <span>{product.quantity}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end justify-content-between">
                                    <div className="w-50">
                                        <p className="m-0 fw-bold">
                                            Supplyer:{" "}
                                            <span className="fst-italic">
                                                {product.supplyer}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-50 text-end">
                                        <button
                                            className="delever-btn"
                                            onClick={handleDelevered}
                                        >
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
                                    On Stock: <span>{product.quantity}</span>
                                </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="number"
                                    name="quantity"
                                    onChange={handleQuantity}
                                />
                                <input type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-desc p-4 border">
                            <h4 className="mb-3">Description</h4>
                            <p className="">{product.desc}</p>
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
