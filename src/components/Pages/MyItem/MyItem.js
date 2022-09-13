import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import Items from "../Inventory/Items";
import Sidebar from "../Inventory/Sidebar";
import "./MyItem.css";

const MyItem = () => {
    const [products, setProducts] = useState([]);
    const [user, loading] = useAuthState(auth);
    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        if (!loading) {
            fetch(`http://localhost:5000/my-items?email=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setProducts(data));
        }
    }, [loading, token, user.email]);

    /*---------------Handle Delete single inventory--------------*/
    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure want to delete this item?"
        );
        if (proceed) {
            const uri = `http://localhost:5000/product/${id}`;
            fetch(uri, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((date) => {
                    alert("Deleted Successfully");
                    const remain = products.filter((m) => m._id !== id);
                    setProducts(remain);
                });
        }
    };
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
                        <div>
                            {products.map((product) => (
                                <div
                                    className="mb-4 p-4 border single-item"
                                    key={product._id}
                                >
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div>
                                                <img
                                                    src={product.img}
                                                    style={{ width: "100%" }}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="item-content">
                                                <div className="delete-btn ms-auto text-end mb-4">
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                product._id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                                <h5>{product.name}</h5>
                                                <span className="text-capitalize text-muted">
                                                    {product.category} ,{" "}
                                                    {product.subcate}
                                                </span>
                                                <p className="mt-3 mb-3">
                                                    {product.desc.slice(0, 120)}{" "}
                                                    ....
                                                </p>
                                                <p className="m-0 mb-1 item-price">
                                                    <span className="fw-bold">
                                                        Price:
                                                    </span>{" "}
                                                    ${product.price}
                                                </p>
                                                <p className="m-0 item-quantity">
                                                    <span className="fw-bold">
                                                        Quantity:
                                                    </span>{" "}
                                                    {product.quantity}
                                                </p>
                                                <div className="update-btn text-end ms-auto">
                                                    <Link
                                                        to={`/product/${product._id}`}
                                                    >
                                                        Update
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyItem;
