import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import styled from "styled-components";
import aboutimg from './images/aboutimg.jpg';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { PiPackageLight } from "react-icons/pi";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import one from './images/one.jpg';
import two from './images/two.jpg';
import three from './images/three.jpg';
import four from './images/four.jpg';

const Styledsection = styled.section`
    display: block;
    margin: 7rem auto 3rem auto;
    width: 85%;
    font-family: "poppins", sans-serif;
    #first-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        #first {
            width: 45%;
            margin: 1rem 0rem 0rem 0rem;
            p {
                font-size: .9rem;
            }
            .shield {
                display: flex;
                flex-direction: row;
                h6 {
                    font-size: 1.3rem;
                    margin: 0rem 0rem .4rem .5rem;
                }
            }
            .para p {
                font-size: .9rem;
                color: #696969;
            }
            #para-shield {
                
            }
        }
        img {
            width: 35rem;
            height: 40rem;
        }
    }
    .image {
        height: 15rem;
    }
    .card-title {
        margin: 1rem 0rem 1rem 0rem;
    }
    .card-text {
        font-size: .9rem;
    }
    .link {
        text-decoration: none;
        color: red;
        text-align: left;
    }
    @media (max-width: 2000px) and (min-width: 1390px) {
        width: 90%;
        #first-section {
            img {
                width: 38rem;
            }
            #first {
                width: 50%;
                margin: 1rem 0rem 0rem 0rem;
                p {
                    font-size: 1.1rem;
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    h6 {
                        font-size: 1.3rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                }
                .para p {
                    font-size: 1rem;
                    color: #696969;
                }
            }
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        width: 90%;
        #first-section {
            img {
                width: 30rem;
                height: 35rem;
            }
            #first {
                width: 45%;
                margin: 1rem 0rem 0rem 0rem;
                p {
                    font-size: .8rem;
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
        .image {
            width: 19rem;
            height: 13rem;
        }
        .card-title {
            font-size: 1.1rem;
        }
        .card-text {
            font-size: .8rem;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        width: 90%;
        #first-section {
            img {
                width: 20rem;
                height: 25rem;
            }
            #first {
                width: 45%;
                margin: 1rem 0rem 0rem 0rem;
                p {
                    font-size: .8rem;
                }
                #para-shield {
                    display: none;
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
        .image {
            width: 18rem;
            height: 10rem;
        }
        .card-title {
            font-size: 1rem;
        }
        .card-text {
            font-size: .7rem;
        }
        .link {
            font-size: .7rem;
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        width: 90%;
        #first-section {
            display: flex;
            flex-direction: column-reverse;
            img {
                display: block;
                margin: 0rem auto 0rem auto;
                width: 25rem;
                height: 25rem;
            }
            #first {
                width: 100%;
                margin: 1rem 0rem 0rem 0rem;
                text-align: center;
                p {
                    font-size: .8rem;
                }
                #para-shield {
                    /* display: none; */
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
        
    }
    @media (max-width: 399px) and (min-width: 0px) {
        width: 90%;
        #first-section {
            display: flex;
            flex-direction: column-reverse;
            img {
                display: block;
                margin: 0rem auto 0rem auto;
                width: 18rem;
                height: 21rem;
            }
            #first {
                width: 100%;
                margin: 1rem 0rem 0rem 0rem;
                text-align: center;
                p {
                    font-size: .8rem;
                }
                #para-shield {
                    /* display: none; */
                }
                .shield {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    h6 {
                        font-size: 1rem;
                        margin: 0rem 0rem .4rem .5rem;
                    }
                    .icon {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
                .para p {
                    font-size: .7rem;
                    color: #696969;
                }
            }
        }
    }
`;

const About = () => {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    const cardData = [
        { id: 1, title: 'Master the Art of Cooking Delicious, Healthy Veggie-Based Dishes Today', description: "your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....", img: `${one}` },
        { id: 2, title: 'Explore New Flavors with Simple, Fresh, and Nutritious Vegetable Recipes', description: "your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....", img: `${two}` },
        { id: 3, title: 'Delight in Healthy Cooking with Fresh Vegetables for Every Meal', description: "your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....", img: `${three}` },
        { id: 4, title: 'Transform Your Meals with Vibrant, Flavorful, and Easy Vegetable Recipes', description: "your ultimate guide to creating delicious, nutritious, and vibrant meals using fresh vegetables. Whether you're a seasoned chef or a home cook....", img: `${four}` },
    ];

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <Styledsection>
                    <div id="first-section">
                        <div id="first">
                            <p>
                                At TastyDaily, we are committed to providing you with the freshest and highest-quality groceries at affordable prices. Our mission is to simplify your shopping experience, save you time, and ensure you have access to a wide range of products to meet all your household needs.
                            </p>
                            <p>
                                TastyDaily is a leading online grocery store that brings convenience to your doorstep. We understand the importance of fresh and nutritious food for a healthy lifestyle, and we strive to make it easy for you to access a diverse selection of groceries.
                            </p>
                            <p>
                                To be the go-to destination for customers seeking the freshest produce, pantry staples, and household essentials while delivering exceptional customer service and an effortless online shopping experience.
                            </p>
                            <div id="para-shield">
                                <div className="para">
                                    <div className="shield">
                                        <IoShieldCheckmarkOutline size={"1.5rem"} className="icon" />
                                        <h6>Quality</h6>
                                    </div>
                                    <p>We source our products from reputable suppliers to ensure you receive only the best quality items.</p>
                                </div>
                                <div className="para">
                                    <div className="shield">
                                        <GoQuestion size={"1.5rem"} className="icon" />
                                        <h6>Customer Support</h6>
                                    </div>
                                    <p>Our friendly and knowledgeable customer support team is available to assist you with any inquiries or concerns.</p>
                                </div>
                                <div className="para">
                                    <div className="shield">
                                        <PiPackageLight size={"1.7rem"} className="icon" />
                                        <h6>Fast Delivery</h6>
                                    </div>
                                    <p>We ensure your order reaches your doorstep promptly and in pristine condition.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={aboutimg} alt="about" />
                        </div>
                    </div>
                    <div style={{ marginTop: "7rem" }}>
                        <div className="container mt-3">
                            <h1 className="container">Our Blog</h1>
                            <Carousel
                                showArrows={true}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={5000}
                                showStatus={true}
                                centerMode={true}
                                centerSlidePercentage={30}
                                swipeable={true}
                                emulateTouch={true}
                                showIndicators={false}
                                useKeyboardArrows={true}
                            >
                                {cardData.map((card) => (
                                    <div className="row card" key={card.id} style={{ margin: "10px" }}>
                                        <div className="card-body">
                                            <img src={card.img} alt="one" className="image" />
                                            <h5 className="card-title">{card.title.slice(0, 40)}</h5>
                                            <p className="card-text">{card.description}</p>
                                            <a className="link">Read More</a>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </Styledsection>
            )}
        </>
    );
}

export default About;