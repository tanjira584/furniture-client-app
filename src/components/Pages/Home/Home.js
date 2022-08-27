import React from "react";
import Footer from "../../share/Footer";
import Header from "../../share/Header";
import Banner from "./Banner";
import Categories from "./Categories";
import ItemsSection from "./ItemsSection";
import ReviewSection from "./ReviewSection";
import StoreSection from "./StoreSection";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Categories></Categories>
            <ItemsSection></ItemsSection>

            <StoreSection></StoreSection>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
