// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletefromcart, increment, decrement, clearcart, selectCartSubtotal, totalquantity } from '../redux/CartSlice';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';

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
        }
        #subtotal {
            position: absolute;
            left: 65%;
        }
        .quantity {
            margin: 0rem;
            font-size: .8rem;
            color: gray;
        }
    }
    #lowerbox {
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
`;

const Cart = () => {

    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart.items);
    const subtotal = useSelector(selectCartSubtotal);
    const totalitems = useSelector(totalquantity);

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

    return (
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
                        <div id='lowerbox'>
                            <div>
                                <h6>Total items: </h6>
                                <p>{totalitems} items</p>
                            </div>
                            <div>
                                <h4>Total</h4>
                                <p>${parseFloat(subtotal).toFixed(2)}</p>
                            </div>
                            <button className='container btn btn-danger'>Prodeed to checkout</button>
                        </div>
                    </>
                )}
            </div>
        </Styledsection>
    );
};

export default Cart;
