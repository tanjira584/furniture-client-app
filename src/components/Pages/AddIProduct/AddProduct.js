import React, { useState } from "react";
import Header from "../../share/Header";
import Footer from "../../share/Footer";
import "./AddProduct.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const [product, setProduct] = useState({
        name: "",
        img: "",
        price: 0,
        quantity: 0,
        supplyer: user.email,
        desc: "",
        rating: 4,
        category: "",
        subcate: "",
    });
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://afternoon-taiga-81908.herokuapp.com/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Product Upload Successfully");
                    e.target.reset();
                    setProduct({
                        name: "",
                        img: "",
                        price: 0,
                        quantity: 0,
                        supplyer: user.email,
                        desc: "",
                        rating: 4,
                        category: "",
                        subcate: "",
                    });
                }
            });
    };
    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <div className="py-5">
                    <h4>Add New Product</h4>
                    <hr />
                    <div className="product-form">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="form-label"
                                        >
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Product Name"
                                            name="name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="category"
                                            className="form-label"
                                        >
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="category"
                                            placeholder="Category"
                                            name="category"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="sub-category"
                                            className="form-label"
                                        >
                                            Sub Category
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="sub-category"
                                            placeholder="Sub Category"
                                            name="subcate"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="img"
                                            className="form-label"
                                        >
                                            Product URL
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            placeholder="Product Url"
                                            name="img"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="price"
                                            className="form-label"
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="price"
                                            placeholder="Price"
                                            name="price"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="quantity"
                                            className="form-label"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="quantity"
                                            placeholder="Quantity"
                                            name="quantity"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h6>Description</h6>
                            <div className="row">
                                <div className="col-md-9">
                                    <div>
                                        <textarea
                                            name="desc"
                                            id=""
                                            cols="30"
                                            rows="5"
                                            className="form-control"
                                            placeholder="About Product"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="submit-btn">
                                        <input
                                            type="submit"
                                            value="Add Product For Sale"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddProduct;
