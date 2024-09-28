// src/components/Cart.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { IoCartSharp } from 'react-icons/io5';
import { removefromwishlist } from '../redux/wishlistslice';
import { addtocart } from '../redux/CartSlice';

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
        #trashicon {
            margin: 2rem 3rem 0rem 0rem;
        }
        #trashicon:hover {
            cursor: pointer;
        }
        #carticon {
            position: absolute;
            left: 66%;
            margin: 1.9rem 0rem 0rem 0rem;
        }
        #carticon:hover {
            cursor: pointer;
        }
        #price {
            position: absolute;
            left: 29%;
            color: #696969;
            font-weight: 500;
        }
        #quantity {
            position: absolute;
            left: 47%;
            color: #696969;
            font-weight: 500;
        }
        .quantity {
            margin: 0rem;
            font-size: .8rem;
            color: gray;
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
    @media (max-width: 899px) and (min-width: 0px) {
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
    @media (max-width: 599px) and (min-width: 0px) {
        display: none;
    }
`;
const Styledmobile = styled.section`
    @media (max-width: 1999px) and (min-width: 600px) {
        display: none;
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: block;
        margin-top: 3rem;
        background-color: none;
        #product-detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: none;
            padding: 1rem;
            #product-info {
                width: 100%; 
            }
            img {
                display: block;
                margin: 0rem auto 0rem auto;
                height: 17rem;
                width: 17rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #price {
                font-size: 1.1rem;
                font-weight: 500;
                color: #696969;
            }
            #mobile-button {
                margin: 0rem 0rem 0rem 0rem;
                button {
                    border: 1px solid #898989;
                    border-radius: 0px;
                    height: 2.5rem;
                    margin: -.5rem 0rem 0rem 0rem;
                }
            }
            #trash {
                size: 1.9rem;
                color: red;
                margin: 1rem 0rem 0rem 0rem;
            }
        }
    }
`;

const Wishlist = () => {

    const [loading, setloading] = useState(true);
    const dispatch = useDispatch();
    const wishitems = useSelector((state) => state.wishlist.items);
    const cartitems = useSelector((state) => state.cart);

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

    // to remove from wishlist
    const handleremove = (item) => {
        dispatch(removefromwishlist(item));
        toast.success(`${item.name} is removed from wishlist`);
    }

    // to add to cart
    const handlecart = (item) => {
        const isProductInCart = cartitems.items.some(cartItem => cartItem.id === item.id);
        if (!isProductInCart) {
            dispatch(addtocart(item));
            toast.success(`${item.name} is added to the cart`);
        } else {
            toast.error(`${item.name} is already in the cart`);
        }
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
                            <p>Add to Cart</p>
                            <p>Remove</p>
                        </div>
                        <div>
                            {wishitems.length === 0 ? (
                                <p>Your Wishlist is Empty.</p>
                            ) : (
                                <>
                                    <div>
                                        {wishitems.map((item) => (
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
                                                <p id='quantity'>{item.quantity}</p>
                                                <IoCartSharp color={"#393939"} id='carticon' size={'1.3rem'} onClick={() => handlecart(item)} />
                                                <FaTrash color={'red'} id='trashicon' onClick={() => handleremove(item)} />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </Styledsection>
                    <Styledtab id='tablet'>
                        {wishitems.length === 0 ? (
                            <p>Your Wishlist is Empty!</p>
                        ) : (
                            <div className='container'>
                                {wishitems.map((item) => (
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
                                                <p>Add to Cart</p>
                                            </div>
                                            <div id='items'>
                                                <p>${parseFloat(item.price).toFixed(2)}</p>
                                                <p>{item.quantity}</p>
                                                <IoCartSharp color={"#393939"} id='carticon' size={'1.3rem'} onClick={() => handlecart(item)} />
                                                <FaTrash style={{ marginRight: '-15px', marginTop: '5px' }} color={'red'} size={".8rem"} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Styledtab>
                    <Styledmobile>
                        {wishitems.length === 0 ? (
                            <p>Your Wishlist is Empty</p>
                        ) : (
                            <div className='container'>
                                {wishitems.map((product) => (
                                    <div>
                                        <div id='product-detail' className='container'>
                                            <div>
                                                <img src={product.imageurl} alt="Product" />
                                            </div>
                                            <div id='product-info'>
                                                <p id='category'>{product.category} / {product.name}</p>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <h3 id='name'>{product.name}</h3>
                                                    <FaTrash id='trash' onClick={() => handleremove(product)} />
                                                </div>
                                                {product.weigh && <p id='quantity'>{product.weigh} kg</p>}
                                                {product.bunch && <p id='bunch'>{product.bunch}</p>}
                                                {product.size && <p id='size'>{product.size}</p>}
                                                {product.dozen && <p id='dozen'>{product.dozen}</p>}
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <p id='price'>${product.price}</p>
                                                    <IoCartSharp color={"#393939"} id='carticon' size={'1.3rem'} onClick={() => handlecart(product)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Styledmobile>
                </>
            )}
        </>
    );
};

export default Wishlist;
