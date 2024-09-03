import React from 'react';
import styled from 'styled-components';
import first from './images/first.jpg';
import third from './images/third.jpg';
import second from './images/second.jpeg';

const Styledsection = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin: 5rem 0rem 1rem 0rem;
    font-family: "poppins", sans-serif;
    div {
        height: 23rem;
        width: 26rem;
        border-radius: 1.5rem;
        border: 1px solid #696969;
        background-repeat: no-repeat;
        h3 {
            font-size: 2.2rem;
            color: #383838;
            margin: 7rem 0rem 0rem 1rem;
            font-weight: 550;
        }
        button {
            padding: 0.5rem 2rem 0.5rem 2rem;
            margin: 1.5rem 0rem 0rem 1rem;
            font-size: 1.1rem;
            font-weight: 500;
            border-radius: 1.5rem;
        }
    }
    div:hover {
        cursor: pointer;
        transform: translate(1.1);
        transition: 0.5s;
    }
    @media (max-width: 599px) and (min-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        div {
            margin: 1rem auto 0rem auto;
            width: 24rem;
            display: block;
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        div {
            margin: 1rem auto 0rem auto;
            width: 19rem;
            display: block;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        justify-content: space-evenly;
        div {
            width: 15.5rem;
            height: 21rem;
            h3 {
                font-size: 1.7rem;
            }
            button {
                font-size: 0.8rem;
            }
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        justify-content: space-evenly;
        div {
            width: 20rem;
            height: 21rem;
            h3 {
                font-size: 2rem;
                margin: 5rem 0rem 0rem 1rem;
            }
            button {
                font-size: 1rem;
            }
        }
    }
`;

const HomeMid = () => {
    return (
        <>
            <Styledsection>
                <div style={{backgroundImage: `url(${second})`}} >
                    <h3>Fresh <y style={{color: "tomato"}} > Vegies </y> <br /> Everyday </h3>
                    <button className='btn btn-secondary' >Shop Now</button>
                </div>
                <div style={{backgroundImage: `url(${first})`}} >
                    <h3>Sweet <y style={{color: "orange"}}> Organic </y> <br /> Drinks </h3>
                    <button className='btn btn-secondary' >Shop Now</button>
                </div>
                <div style={{backgroundImage: `url(${third})`}} >
                    <h3>Fairly <y style={{color: "red"}} > Meat </y> <br /> Lovers </h3>
                    <button className='btn btn-secondary' >Shop Now</button>
                </div>
            </Styledsection>
        </>
    );
}

export default HomeMid;