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
                        <Link to="/">Fabric Living Room Sets</Link>
                    </li>
                    <li>
                        <Link to="/">Motion Living Room Sets</Link>
                    </li>
                    <li>
                        <Link to="/">Leather Living Sets</Link>
                    </li>
                    <li>
                        <Link to="/">Sleeper Living Sets</Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Sofa</h4>
                <ul>
                    <li>
                        <Link to="/">Fabric Sofa</Link>
                    </li>
                    <li>
                        <Link to="/">Motion Sofa</Link>
                    </li>
                    <li>
                        <Link to="/">Leather Sofa</Link>
                    </li>
                    <li>
                        <Link to="/">Sleeper Sofa</Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Loveseat</h4>
                <ul>
                    <li>
                        <Link to="/">Fabric Loveseat</Link>
                    </li>
                    <li>
                        <Link to="/">Motion Loveseat</Link>
                    </li>
                    <li>
                        <Link to="/">Leather Loveseat</Link>
                    </li>
                    <li>
                        <Link to="/">Sleeper Loveseat</Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Chairs</h4>
                <ul>
                    <li>
                        <Link to="/">Ottomans</Link>
                    </li>
                    <li>
                        <Link to="/">Chaises</Link>
                    </li>
                    <li>
                        <Link to="/">Accent Chairs</Link>
                    </li>
                    <li>
                        <Link to="/">Swivel Chairs</Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Tables</h4>
                <ul>
                    <li>
                        <Link to="/">Coctail Tables</Link>
                    </li>
                    <li>
                        <Link to="/">End Tables</Link>
                    </li>
                    <li>
                        <Link to="/">Console Tables</Link>
                    </li>
                    <li>
                        <Link to="/">Coctail End Table Group</Link>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h4>Media Center</h4>
                <ul>
                    <li>
                        <Link to="/">Accent Cabinet</Link>
                    </li>
                    <li>
                        <Link to="/">TV Carts</Link>
                    </li>
                    <li>
                        <Link to="/">Plasma Stands</Link>
                    </li>
                    <li>
                        <Link to="/">Media Chests</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
