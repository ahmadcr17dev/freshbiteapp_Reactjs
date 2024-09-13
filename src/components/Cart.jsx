// src/components/Cart.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletefromcart, increment, decrement, clearcart, selectCartSubtotal, totalquantity, checkout } from '../redux/CartSlice';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const Styledsection = styled.section`
    display: block;
    margin: 5rem auto 3rem auto;
    width: 85%;
    border-radius: 1rem;
    border: 1px solid #898989;
    padding: 2rem;
    font-family: "poppins", sans-serif;
    #labels {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: coral;
        padding: .5rem 1rem 0rem 1rem;
        p {
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
        }
    }
    #items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem 0rem 1rem 0rem;
        img {
            width: 5rem;
            height: 5rem;
        }
        #itemname {
            display: flex;
        }
        p {
            margin: 1.9rem 0rem 0rem 0rem;
        }
        #buttons {
            display: flex;
            position: absolute;
            left: 43%;
            button {
                height: 2.5rem;
                margin: 1.3rem 1rem 0rem 1rem;
                border: 0px solid black;
            }
            input {
                width: 1rem;
                height: 2.5rem;
                padding: auto;
                margin: 1.3rem 0rem 0rem 0rem;
                border: 0px solid black;
            }
        }
        #trashicon {
            margin: 2rem 3rem 0rem 0rem;
        }
        #trashicon:hover {
            cursor: pointer;
        }
        #price {
            position: absolute;
            left: 29%;
            color: #696969;
            font-weight: 500;
        }
        #subtotal {
            position: absolute;
            left: 65%;
            color: #696969;
            font-weight: 500;
        }
        .quantity {
            margin: 0rem;
            font-size: .8rem;
            color: gray;
        }
    }
    .lowerbox {
        border: 1px solid #898989;
        border-radius: 1rem;
        margin: 3rem 0rem 1rem 0rem;
        padding: 1.9rem 1.1rem 1.1rem 1.1rem;
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        div:nth-child(1) {
            h6 {
                font-size: 1rem;
            }
        }
        div:nth-child(2) {
            h4 {
                font-size: 1.8rem;
            }
            p {
                color: red;
                font-size: 1.4rem;
                font-weight: 500;
            }
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #items {
            #price {
                left: 30%;
            }
        }
        #tablet {
            display: none;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        display: none;
    }
`;
const Styledtab = styled.div`
    @media (max-width: 1990px) and (min-width: 900px) {
        display: none;
    }
    @media (max-width: 899px) and (min-width: 600px) {
        display: block;
        border: 1px solid #898989;
        margin: 5rem auto 3rem auto;
        width: 90%;
        border-radius: 1rem;
        padding: 1rem;
        font-family: "poppins", sans-serif;
        #innerbox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        #imagename {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            img {
                width: 8rem;
                height: 8rem;
            }
            h5 {
                margin: 3rem 0rem 0rem 0rem;
            }
            p {
                font-weight: 500;
                color: #696969;
            }
        }
        #secondbox {
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            #label {
                margin: 1.3rem 0rem 0rem 0rem;
                p {
                    padding: .8rem .8rem 0rem .8rem;
                    text-align: center;
                    font-weight: 500;
                    color: #696969;
                }
            }
            #items {
                p {
                    padding: 0rem .8rem 0rem .8rem;
                    text-align: center;
                }
            }
            #button {
            display: flex;
            padding: 0rem 1rem 0rem 0rem;
            button {
                margin: 0rem 0rem 0rem 0rem;
                border: 0px solid black;
                height: 1rem;
            }
            input {
                width: 1rem;
                height: 2.5rem;
                padding: auto;
                margin: 1.3rem 0rem 0rem 0rem;
                border: 0px solid black;
            }
        }
        }
    }
`;

const Cart = () => {

    const [loading, setloading] = useState(true);
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart.items);
    const subtotal = useSelector(selectCartSubtotal);
    const totalitems = useSelector(totalquantity);

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchs = async () => {
                try {
                    setloading(false);
                } catch (error) {
                    console.log("Error is:", error);
                }
            };
            fetchs();
        }, 1500)
        return () => clearTimeout(timer);
    }, [])

    const handleRemove = (name) => {
        dispatch(deletefromcart(name));
        toast.success(`${name.name} is removed from the cart`);
    };

    const handleincrement = (id) => {
        dispatch(increment(id));
    }

    const handledecrement = (id) => {
        dispatch(decrement(id));
    }

    const handleclearcart = () => {
        dispatch(clearcart());
        toast.success("Removed all items from the cart");
    }

    const handlecheckout = () => {
        dispatch(checkout());
    }

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <>
                    <Styledsection>
                        <div id='labels'>
                            <p>Product</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>SubTotal</p>
                            <p>Remove</p>
                        </div>
                        <div>
                            {cartitems.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <>
                                    <div>
                                        {cartitems.map((item) => (
                                            <div id='items' key={item.name}>
                                                <div id='itemname'>
                                                    <img src={item.imageurl} alt='Product Pic' />
                                                    <p>
                                                        {item.name} <br />
                                                        {item.weigh && <p className='quantity'>{item.weigh} kg</p>}
                                                        {item.dozen && <p className='quantity'>{item.dozen} dozen</p>}
                                                        {item.bunch && <p className='quantity'>{item.bunch} bunch</p>}
                                                        {item.size && <p className='quantity'>{item.size}</p>}
                                                    </p>
                                                </div>
                                                <p id='price'>${item.price}</p>
                                                <div id='buttons'>
                                                    <button className='btn' onClick={() => handledecrement(item)} disabled={item.quantity <= 1} >-</button>
                                                    <p>
                                                        {item.quantity}
                                                    </p>
                                                    <button className='btn' onClick={() => handleincrement(item)} disabled={item.quantity >= item.stock} >+</button>
                                                </div>
                                                <p id='subtotal'>${parseFloat(item.quantity * item.price).toFixed(2)}</p>
                                                <FaTrash onClick={() => handleRemove(item)} color={'red'} id='trashicon' />
                                            </div>
                                        ))}
                                        <button className='btn btn-danger mt-5' onClick={handleclearcart}>Clear Cart</button>
                                    </div>
                                    <div className='lowerbox'>
                                        <div>
                                            <h6>Total items: </h6>
                                            <p>{totalitems} items</p>
                                        </div>
                                        <div>
                                            <h4>Total</h4>
                                            <p>${parseFloat(subtotal).toFixed(2)}</p>
                                        </div>
                                        <button className='container btn btn-danger' onClick={handlecheckout}>
                                            <NavLink to="/checkout" className='container text-decoration-none text-white'>Prodeed to checkout</NavLink>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </Styledsection>
                    <Styledtab id='tablet'>
                        {cartitems.length === 0 ? (
                            <p>Your Cart is Empty!</p>
                        ) : (
                            <div className='container'>
                                {cartitems.map((item) => (
                                    <div key={item.id} id='innerbox'>
                                        <div id='imagename'>
                                            <img src={item.imageurl} alt={item.name} />
                                            <div>
                                                <h5>{item.name}</h5>
                                                {item.weigh && <p className='quantity'>{item.weigh} kg</p>}
                                                {item.dozen && <p className='quantity'>{item.dozen} dozen</p>}
                                                {item.bunch && <p className='quantity'>{item.bunch} bunch</p>}
                                                {item.size && <p className='quantity'>{item.size}</p>}
                                            </div>
                                        </div>
                                        <div id='secondbox'>
                                            <div id='label'>
                                                <p>Price</p>
                                                <p style={{ margin: '0rem 1.5rem 0rem 1.5rem' }}>Quantity</p>
                                                <p>SubTotal</p>
                                            </div>
                                            <div id='items'>
                                                <p>${parseFloat(item.price).toFixed(2)}</p>
                                                <div id='button'>
                                                    <button className='btn' onClick={() => handledecrement(item)} disabled={item.quantity <= 1} >-</button>
                                                    <p>
                                                        {item.quantity}
                                                    </p>
                                                    <button className='btn' onClick={() => handleincrement(item)} disabled={item.quantity >= item.stock} >+</button>
                                                </div>
                                                <p>${parseFloat(item.price * item.quantity).toFixed(2)}</p>
                                                <FaTrash style={{ marginRight: '-15px', marginTop: '5px' }} color={'red'} size={".8rem"} onClick={() => handleRemove(item)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className='btn btn-danger mt-5' onClick={handleclearcart}>Clear Cart</button>
                                <div className='lowerbox' style={{ marginTop: '3rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h6>Total items: </h6>
                                        <p>{totalitems} items</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h4>Total</h4>
                                        <p>${parseFloat(subtotal).toFixed(2)}</p>
                                    </div>
                                    <button className='container btn btn-danger' onClick={handlecheckout}>
                                        <NavLink to="/checkout" className='container text-decoration-none text-white'>Prodeed to checkout</NavLink>
                                    </button>
                                </div>
                            </div>
                        )}
                    </Styledtab>
                </>
            )}
        </>
    );
};

export default Cart;
