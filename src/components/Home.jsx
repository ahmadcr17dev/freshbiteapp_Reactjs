import React from "react";
import HeroSection from "./HeroSection";
import MidIcons from "./MidIcons";
import HomeMid from "./HomeMid";
import Email from "./Email";
import HomeProducts from "./HomeProducts";

const Home = () => {
    return (
        <>
            <HeroSection />
            <MidIcons />
            <HomeMid />
            <HomeProducts />
            <Email />
        </>
    );
}

export default Home;