import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Styledsection = styled.section`
    font-family: "poppins", sans-serif;
    display: block;
    margin: 5rem auto 5rem auto;
    border: 0px solid #898989;
    border-radius: 1rem;
    width: 85%;
    #mycart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #898989;
        color: white;
        padding: .5rem 1rem 0rem 1rem;
    }
`;

const Cart = () => {

    const [product, setproduct] = useState('');
    const [price, setprice] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchs = async () => {
                try {
                    const productname = localStorage.getItem('cart');
                    if (productname) {
                        setproduct(productname);
                    }
                } catch (error) {
                    alert("error");
                }
            }
            fetchs();
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Styledsection>
                <div id="mycart">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>SubTotal</p>
                    <p>Remove</p>
                </div>
                <div>
                    {product.name}
                </div>

            </Styledsection>
        </>
    );
};

export default Cart;
