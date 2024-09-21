import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import styled from "styled-components";
import i from './images/i.png';
import ii from './images/ii.png';
import iii from './images/iii.png';
import iv from './images/iv.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Styledsection = styled.section`
    display: block;
    margin: 8rem auto 3rem auto;
    padding: 3rem 5rem 3rem 5rem;
    background-color: beige;
    width: 90%;
    border-radius: 1rem;
    font-family: "poppins", sans-serif;
    #first-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div:nth-child(1) {
            margin: 2rem 0rem 0rem 0rem;
            p {
                color: #898989;
                width: 80%;
                margin: .5rem 0rem 1.5rem 0rem;
                font-weight: 400;
            }
        }
        img {
            width: 25rem;
            height: 19rem;
            border-radius: 0.3rem;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #first-box {
            img {
                width: 20rem;
                height: 16rem;
            }
            div:nth-child(1) {
                p {
                    font-size: .8rem;
                }
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
        #first-box {
            img {
                width: 17rem;
                height: 15rem;
            }
            div:nth-child(1) {
                margin: .5rem 0rem 0rem 0rem;
                p {
                    font-size: .8rem;
                }
            }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        padding: 1.5rem;
        #first-box {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            img {
                width: 100%;
                height: 100%;
                display: block;
                margin: 0rem auto 0rem auto;
            }
            div:nth-child(1) {
                text-align: center;
                margin: 3rem 0rem 0rem 0rem;
                h3 {
                    font-size: 1.5rem;
                }
                p {
                    width: 100%;
                    font-size: .9rem;
                }
            }
        }
    }
`;

const Styledteam = styled.section`
    display: block;
    margin: 8rem auto 3rem auto;
    padding: 3rem 5rem 3rem 5rem;
    width: 100%;
    font-family: "poppins", sans-serif;
    #second-box {
        text-align: center;
        h3 {
            font-size: 2.3rem;
        }
        p {
            font-weight: 400;
            color: #898989;
        }
        #para-1 {
            display: none;
        }
        #team-members {
            display: block;
            div {
                margin: 3rem 0rem 1rem 0rem;
                padding: 0rem .5rem 0rem .5rem;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: .3rem;
                }
                h5 {
                    padding: 1.8rem 0rem 0rem 0rem;
                }
                p {
                    font-size: .9rem;
                }
                #para-1 {
                    display: none;
                }
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        #second-box {
            h3 {
                font-size: 2rem;
            }
            p {
                font-weight: 400;
                font-size: .8rem;
            }
            #para-1 {
                display: none;
            }
            #team-members {
                div {
                    h5 {
                        font-size: 1rem;
                    }
                    p {
                        font-size: .8rem;
                    }
                }
            }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: block;
        margin: 8rem auto 3rem auto;
        padding: 3rem 1rem 3rem 1rem;
        width: 100%;
        #second-box {
            width: 100%;
            h3 {
                font-size: 1.5rem;
                width: 100%;
            }
            #para-1 {
                display: block;
                font-weight: 400;
                font-size: .8rem;
            }
            #para {
                display: none;
            }
            #team-members {
                div {
                    h5 {
                        font-size: 1.3rem;
                    }
                    p {
                        font-size: .8rem;
                    }
                }
            }
        }
    }
`;

const teamdata = [
    {
        id: '1', image: `${i}`, name: 'Annette Black', status: 'General Manager'
    },
    {
        id: '2', image: `${ii}`, name: 'John Morrison', status: 'Stock Manager'
    },
    {
        id: '3', image: `${iii}`, name: 'Michael White', status: 'Sales Manager'
    },
    {
        id: '4', image: `${iv}`, name: 'Alexandria Great', status: 'Project Manager'
    },
];

const responsive = {
    desktop: {
        items: 4,
        breakpoint: { max: 1900, min: 900 },
    },
    tablet: {
        items: 3,
        breakpoint: { max: 899, min: 600 },
    },
    mobile: {
        items: 1,
        breakpoint: { max: 599, min: 0 },
    }
};

const About = () => {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false);
        }, 3000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <>
                    <Styledsection>
                        <div id="first-box">
                            <div>
                                <h3>What We Do</h3>
                                <p>
                                    At Freshbite, we are passionate about delivering the freshest fruits, vegetables, and dairy products straight to your doorstep. Our mission is to make healthy eating simple and accessible by sourcing the finest produce from local farms and trusted suppliers.
                                </p>
                                <button className="btn btn-danger">Read More</button>
                            </div>
                            <div>
                                <img src='https://images.unsplash.com/photo-1528373553865-c5d96fe764f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D' alt="about image" />
                            </div>
                        </div>
                    </Styledsection>
                    <Styledteam>
                        <div id="second-box">
                            <h3>Meet Our Team</h3>
                            <p id="para">
                                Our Team consist of very dedicated & hard worker men & women <br /> who will assist you till the end
                            </p>
                            <p id="para-1">
                                Our Team consist of very dedicated & hard worker men & women who will assist you till the end
                            </p>
                            <div id="team-members">
                                <Carousel
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    swipeable={true}
                                    showDots={false}
                                    responsive={responsive}
                                    infinite={true}
                                    keyBoardControl={true}
                                    ssr={true}
                                    itemClass="carousel-item-padding-0-px"
                                    pauseOnHover={false}
                                    arrows={false}
                                >
                                    {teamdata.map((item) => (
                                        <div key={item.id}>
                                            <img src={item.image} alt="team" />
                                            <h5>{item.name} </h5>
                                            <p>{item.status}</p>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </Styledteam>
                </>
            )}
        </>
    );
}

export default About;