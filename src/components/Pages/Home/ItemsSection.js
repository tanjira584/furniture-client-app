import React, { useEffect, useState } from "react";
import "./ItemsSection.css";
import { Link } from "react-router-dom";

const ItemsSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <section className="items-section">
            <div className="container-md">
                <div className="section-title mb-4 d-flex align-items-center justify-content-between">
                    <h2>Our collections</h2>
                    <Link to="/products">Manage Inventory</Link>
                </div>
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-md-4" key={product._id}>
                            <div className="product h-100 border p-4 ">
                                <div className="img mb-3">
                                    <img
                                        style={{ width: "100%" }}
                                        src={product.img}
                                        alt=""
                                    />
                                </div>
                                <div className="content mb-3 pb-5">
                                    <h6 className="">{product.name}</h6>

                                    <p className="m-0">
                                        {product.desc.slice(0, 100)} ...
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between my-2 price">
                                        <div className="">
                                            <p className="m-0">
                                                Price:{" "}
                                                <span>${product.price}</span>
                                            </p>
                                        </div>

                                        <div>
                                            <p className="m-0">
                                                Quantity:{" "}
                                                <span>{product.quantity}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/product/${product._id}`}>
                                    Update
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItemsSection;
