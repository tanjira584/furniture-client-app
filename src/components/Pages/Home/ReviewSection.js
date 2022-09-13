import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import user1 from "./../../../images/user1.png";
import user2 from "./../../../images/test1.jpg";
import user3 from "./../../../images/test2.jpg";
import "./ReviewSection.css";
import google from "./../../../images/google.svg";
const ReviewSection = () => {
    return (
        <div className="reviews-area py-5">
            <div className="container-md">
                <div className="row">
                    <div className="col-md-4">
                        <div className="review">
                            <div className="content-block p-4 ">
                                <div className="rating-icon d-flex align-items-center justify-content-between">
                                    <div>
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
                                                    className="icon "
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
                                    <div className="google-icon">
                                        <img src={google} alt="" />
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="m-0">
                                        hear we are again at half price suites
                                        this our 5th leather suit allways a good
                                        buy and a smile no hard sell pushing you
                                        to buy just relax and answer all your
                                        questions to make up your own mind
                                        highly recommend you wont get better
                                        value for money very kind regards dave &
                                        sheila ward🥰🥰🥰
                                    </p>
                                </div>
                            </div>
                            <div className="user-block d-flex align-items-center">
                                <div
                                    className="user me-3"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <img src={user1} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">Tanjir Ahmed</p>
                                    <span>3 month ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="review">
                            <div className="content-block p-4 ">
                                <div className="rating-icon d-flex align-items-center justify-content-between">
                                    <div>
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
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faStarHalfAlt}
                                                ></FontAwesomeIcon>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="google-icon">
                                        <img src={google} alt="" />
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="m-0">
                                        hear we are again at half price suites
                                        this our 5th leather suit allways a good
                                        buy and service with a smile no hard
                                        sell pushing you to buy just relax and
                                        answer all your questions to make up
                                        your own mind highly recommend you wont
                                        get better value for money very kind
                                        regards dave & sheila ward
                                    </p>
                                </div>
                            </div>
                            <div className="user-block d-flex align-items-center">
                                <div
                                    className="user me-3 rounded rounded-circle overflow-hidden"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <img src={user2} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">Ofial Hasnat</p>
                                    <span>5 day ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="review">
                            <div className="content-block p-4 ">
                                <div className="rating-icon d-flex align-items-center justify-content-between">
                                    <div>
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
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon text-muted"
                                                    icon={faStar}
                                                ></FontAwesomeIcon>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="google-icon">
                                        <img src={google} alt="" />
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="m-0">
                                        hear we are again at half price suites
                                        this our 5th leather suit allways a good
                                        buy and service with a smile no hard
                                        sell pushing you to buy just relax and
                                        answer all your questions to make up
                                        your own mind highly recommend you wont
                                        get better value for money very kind
                                        regards dave & sheila ward
                                    </p>
                                </div>
                            </div>
                            <div className="user-block d-flex align-items-center">
                                <div
                                    className="user me-3 rounded rounded-circle overflow-hidden"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <img src={user3} alt="" />
                                </div>
                                <div>
                                    <p className="m-0">Eftekher Alam</p>
                                    <span>3 min ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
