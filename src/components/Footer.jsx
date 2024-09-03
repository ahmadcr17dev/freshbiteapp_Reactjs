import React from "react";
import styled from "styled-components";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPinterest } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io5";
import { LiaCcMastercard } from "react-icons/lia";
import { LiaCcApplePay } from "react-icons/lia";
import { LiaCcVisa } from "react-icons/lia";
import { LiaCcAmazonPay } from "react-icons/lia";

const Styledfooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: "poppins", sans-serif; 
    margin: 0rem 0rem 0rem 0rem;
    background-color: whitesmoke;
    padding: 3rem 0rem 1rem 0rem;
    width: 100%;
    .mobile-desc {
        display: none;
    }
    .links {
        display: flex;
        flex-direction: column;
        a {
            text-decoration: none;
            color: #383838;
            padding: 0.3rem 0rem 0.3rem 0rem;
        }
        a:hover {
            color: black;
            text-decoration: none;
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        text-align: center;
        h4 {
            margin-bottom: 2rem;
            font-size: 2rem;
        }
        div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            a {
                color: #494949;
                font-size: 1.7rem;
                border: 0px solid none;
                border-radius: 50rem;
                padding: 0rem 0.1rem 0rem 0.1rem;
            }
            a:hover {
                cursor: pointer;
                color: black;
            }
        }
    }
    .store {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        a {
            padding: 0.5rem 2.5rem 0.5rem 1.3rem;
            background-color: #696969;
            border: 0px;
            border-radius: 3rem;
            color: white;
            /* height: 2.5rem; */
            width: max-content;
            margin: 0rem 0rem 0.5rem 0rem;
            font-size: 0.8rem;
            text-decoration: none;
        }
        a:hover {
            cursor: pointer;
            background-color: black;
            transition: 0.5s;
            text-decoration: none;
        }
    }
    .payment-icons {
        display: flex;
        flex-direction: row;
        justify-content: left;
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        .links {
            a {
                font-size: 0.8rem;
            }
        }
        .info {
            h4 {
                font-size: 1.6rem;
                margin-bottom: 1.5rem;
            }
            p {
                font-size: 0.8rem;
            }
        }
        .store {
            a {
                font-size: 0.8rem;
            }
            h5 {
                font-size: 1.1rem;
            }
        }
        .payment {
            h5 {
                font-size: 1.1rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        .links {
            a {
                font-size: 0.7rem;
            }
        }
        .info {
            h4 {
                font-size: 1.5rem;
                margin-bottom: 1.3rem;
            }
            p {
                font-size: 0.7rem;
            }
        }
        .store {
            a {
                font-size: 0.7rem;
            }
            h5 {
                font-size: 1rem;
            }
        }
        .payment {
            h5 {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        .links {
            padding-left: 1rem;
            a {
                font-size: 1rem;
            }
        }
        .info {
            h4 {
                font-size: 1.6rem;
                margin-bottom: 1.5rem;
                text-align: left;
                padding: 3rem 0rem 0rem 1rem;
            }
            .desc {
                display: none;
                font-size: 0.7rem;
                text-align: left;
                padding: 0rem 0rem 0rem 1rem;
            }
            div {
                display: flex;
                flex-direction: row;
                justify-content: left;
                margin: 0rem 0rem 0rem 1rem;
            }
        }
        .store {
            margin: 3rem 0rem 1rem 1rem;
            a {
                font-size: 0.8rem;
            }
            h5 {
                font-size: 1.4rem;
            }
        }
        .payment {
            margin: 3rem 0rem 1rem 1rem;
            h5 {
                font-size: 1.4rem;
            }
            div {
                justify-content: left;
            }
        }
        .mobile-desc {
            display: flex;
            font-size: 0.9rem;
            margin: 0rem 0rem 0rem 1rem;
            text-align: left;
        }
    }
`;

const Footer = () => {
    return (
        <>
            <Styledfooter>
                <div className="links">
                    <a href="#about">About us</a>
                    <a href="#contact">Contact us</a>
                    <a href="#shipping">Shipping Policy</a>
                    <a href="#refund">Refund Policy</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#deliverey">Deliverey Info</a>
                    <a href="#terms">Terms & Conditions</a>
                </div>
                <div className="info">
                    <h4>Estore</h4>
                    <p className="desc">We're at the Estore, an innovative team of food engineers. Our unique <br /> model minimizes fresh food handling by up to 85%, sourcing locally and <br /> dispatching within hours through cold chain logistics in eco-friendly <br /> containers.</p>
                    <p className="mobile-desc">We're at the Estore, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers.</p>
                    <div>
                        <a href="https://www.facebook.com"> <MdOutlineFacebook /> </a>
                        <a href="https://www.instagram.com"> <AiFillInstagram /> </a>
                        <a href="https://www.pinterest.com"> <AiFillPinterest /> </a>
                        <a href="https://www.twitter.com"> <AiFillTwitterCircle /> </a>
                    </div>
                </div>
                <div>
                    <div className="store">
                        <h5>Download Our App</h5>
                        <a href="https://www.googleplaystore.com"> <IoLogoGooglePlaystore color={"white"} size={"1.1rem"} className="store-icon" /> Play Store</a>
                        <a href="https://www.applestore.com"> <IoLogoApple color={"white"} size={"1.1rem"} className="store-icon" /> App Store</a>
                    </div>
                    <div className="payment">
                        <h5>Payment Gateway</h5>
                        <div className="payment-icons">
                            <LiaCcMastercard size={"2.5rem"} />
                            <LiaCcApplePay size={"2.5rem"} />
                            <LiaCcVisa size={"2.5rem"} />
                            <LiaCcAmazonPay size={"2.5rem"} />
                        </div>
                    </div>
                </div>
            </Styledfooter>
        </>
    );
}

export default Footer;