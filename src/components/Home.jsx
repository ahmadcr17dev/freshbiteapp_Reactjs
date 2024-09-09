import React, { useState, useEffect, useContext } from "react";
import HeroSection from './HeroSection';
import MidIcons from "./MidIcons";
import HomeMid from "./HomeMid";
import Email from "./Email";
import HomeProducts from "./HomeProducts";
import { MoonLoader } from "react-spinners";
import Layout from "./Layout";
import MyContext from '../context/MyContext';

const Home = () => {

    const [loading, setloading] = useState(true);
    const context = useContext(MyContext);
    const {name} = context;

    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [])


    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <Layout>
                    <HeroSection />
                    <MidIcons />
                    <HomeMid />
                    <HomeProducts />
                    <Email />
                </Layout>
            )}
        </>
    );
}

export default Home;