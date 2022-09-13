import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./Items.css";

const Items = () => {
    const [products, setProducts] = useState([]);
    const [refatch, setRefetch] = useState(false);
    const search = useLocation().search;
    const category = new URLSearchParams(search).get("category");
    const subCategory = new URLSearchParams(search).get("subCategory");

    useEffect(() => {
        fetch(
            `http://localhost:5000/products?category=${category}&subCategory=${subCategory}`
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [refatch, category, subCategory]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "delete",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Product Delete Successfully");
                    setRefetch(!refatch);
                }
            });
    };

    return (
        <div className="border-start px-3">
            {products.map((product) => (
                <div className="mb-4 p-4 border single-item" key={product._id}>
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
                                            handleDelete(product._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                                <h5>{product.name}</h5>
                                <span className="text-capitalize text-muted">
                                    {product.category} , {product.subcate}
                                </span>
                                <p className="mt-3 mb-3">
                                    {product.desc.slice(0, 120)} ....
                                </p>
                                <p className="m-0 mb-1 item-price">
                                    <span className="fw-bold">Price:</span> $
                                    {product.price}
                                </p>
                                <p className="m-0 item-quantity">
                                    <span className="fw-bold">Quantity:</span>{" "}
                                    {product.quantity}
                                </p>
                                <div className="update-btn text-end ms-auto">
                                    <Link to={`/product/${product._id}`}>
                                        Update
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;
