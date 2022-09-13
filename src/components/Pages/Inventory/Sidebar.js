import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="mb-4">
                <h4>Living Room Sets</h4>
                <ul>
                    <li>
                        <Link to="/products?category=living room sets&subCategory=fabric living room sets">
                            Fabric Living Room Sets
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=living room sets&subCategory=motion living room sets">
                            Motion Living Room Sets
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=living room sets&subCategory=leather living room sets">
                            Leather Living Room Sets
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=living room sets&subCategory=sleeper living room sets">
                            Sleeper Living Room Sets
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Sofa</h4>
                <ul>
                    <li>
                        <Link to="/products?category=sofa&subCategory=fabric sofa">
                            Fabric Sofa
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=sofa&subCategory=motion sofa">
                            Motion Sofa
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=sofa&subCategory=leather sofa">
                            Leather Sofa
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=sofa&subCategory=sleeper sofa">
                            Sleeper Sofa
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Loveseat</h4>
                <ul>
                    <li>
                        <Link to="/products?category=loveseat&subCategory=fabric loveseat">
                            Fabric Loveseat
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=loveseat&subCategory=motion loveseat">
                            Motion Loveseat
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=loveseat&subCategory=leather loveseat">
                            Leather Loveseat
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=loveseat&subCategory=sleeper loveseat">
                            Sleeper Loveseat
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Chairs</h4>
                <ul>
                    <li>
                        <Link to="/products?category=chairs&subCategory=ottomans">
                            Ottomans
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=chairs&subCategory=chaises">
                            Chaises
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=chairs&subCategory=accent chairs">
                            Accent Chairs
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=chairs&subCategory=swivel chairs">
                            Swivel Chairs
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Tables</h4>
                <ul>
                    <li>
                        <Link to="/products?category=tables&subCategory=coctail tables">
                            Coctail Tables
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=tables&subCategory=end tables">
                            End Tables
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=tables&subCategory=console tables">
                            Console Tables
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=tables&subCategory=coctail end table group">
                            Coctail End Table Group
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Media Center</h4>
                <ul>
                    <li>
                        <Link to="/products?category=media center&subCategory=accent cabinet">
                            Accent Cabinet
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=media center&subCategory=tv carts">
                            TV Carts
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=media center&subCategory=plasma stands">
                            Plasma Stands
                        </Link>
                    </li>
                    <li>
                        <Link to="/products?category=media center&subCategory=media chests">
                            Media Chests
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
