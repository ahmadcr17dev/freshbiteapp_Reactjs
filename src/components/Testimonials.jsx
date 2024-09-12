import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';

const Styleddiv = styled.div`
    display: block;
    margin: 5rem auto 3rem auto;
    font-family: "poppins", sans-serif;
    text-align: center;
    h1 {
        font-size: 3rem;
        font-weight: 500;
    }
    h7 {
        font-weight: 500;
        color: #696969;
    }
    .container {
        margin: 3rem auto 1rem auto;
    }
    .stars {
        margin: 0rem auto 4rem auto;
        color: orange;
        font-size: 1.3rem;
    }
    @media (max-width: 599px) and (min-width: 0px) {
        h1 {
            font-size: 2.5rem;
        }
    }
`;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const testidata = [
    {
        id: 1, name: 'Joseph Siant', comment: "The quality of Fresh Bite's fruits, vegetables, and dairy products is consistently top-notch. Everything is always fresh, well-packed, and delivered on time. I couldn't ask for better service!", star: '3.5'
    },
    {
        id: 2, name: 'Mark Tommy', comment: "Fresh Bite has completely changed the way I shop for groceries. The convenience of having fresh produce delivered to my door is unbeatable, and the products are always in perfect condition.", star: '4.5'
    },
    {
        id: 3, name: 'Alina Sander', comment: "I've been using Fresh Bite for a few months now, and I'm really impressed. The variety of fresh fruits, vegetables, and dairy is fantastic, and I always receive my orders exactly as requested.", star: '4.5'
    },
    {
        id: 4, name: 'John Anthony', comment: "Fresh Bite makes healthy eating so much easier! The freshness of their products is unmatched, and the ease of online ordering and fast delivery has saved me so much time in my busy schedule.", star: '3.5'
    },
]

const Testimonials = () => {

    return (
        <>
            <Styleddiv>
                <h1>Testimonials</h1>
                <h7>See what our clients are saying about us</h7>
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    infinite={true}
                    dotListClass="custom-dot-list"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false}
                    pauseOnHover={false}
                >
                    {testidata.map((item) => (
                        <div key={item.id} className='container'>
                            <p className='card-text'>{item.comment}</p>
                            <h5 className='card-title'>{item.name}</h5>
                            <div className='stars'>
                                {Array.from({ length: item.star }, (_, i) => (
                                    <span key={i}>
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </Styleddiv>
        </>
    );
}

export default Testimonials;