import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { MoonLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../redux/CartSlice';

const Styledsection = styled.section`
    background-color: white;
    padding: 7rem 0rem 7rem 0rem;
    font-size: "poppins", sans-serif;
    #product-detail {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0rem auto 0rem auto;
        border: 1px solid #898989;
        height: 38rem;
        width: 70rem;
        border-radius: 1rem;
        background-color: white;
        padding: 5rem 0rem 3rem 0rem;
        #product-info {
            width: 30rem;
        }
        img {
            height: 25rem;
            width: 19rem;
        }
        #category {
            font-size: 1.1rem;
            font-weight: 450;
            color: #898989;
        }
        #name {
            font-size: 3rem;
            font-weight: 550;
        }
        #stock {
            font-size: 1rem;
            margin: 1rem 0rem 0rem 0rem;
            font-weight: 500;
        }
        #description {
            font-size: 1rem;
            color: #898989;
            font-weight: 500;
            margin: 1.8rem 0rem 0rem 0rem;
        }
        #quantity {
            font-size: 1rem;
            font-weight: 500;
        }
        #price {
            color: red;
            font-weight: 500;
            font-size: 1.3rem;
        }
    }
    #plusminus {
        display: flex;
        flex-direction: row;
        button {
            border-radius: .4rem;
            margin-right: .5rem;
        }
        input {
            width: 1.9rem;
            padding: auto;
            margin-right: .5rem;
        }
    }
    #addtocart {
        width: 19rem;
        font-size: 1.1rem;
        padding: .5rem 1.9rem .5rem 1.9rem;
        font-weight: 470;
    }
    #placeorder {
        width: 19rem;
        font-size: 1.1rem;
        font-weight: 490;
        padding: .5rem 1.9rem .5rem 1.9rem; 
        margin: 1rem 0rem 0rem 0rem;
    }
    #msg {
        background-color: white;
        color: black;
        padding: 10px;
        position: fixed;
        top: 15%;
        right: 5%;
        left: auto;
        z-index: 1000;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #product-detail {
            width: 50rem;
            height: 33rem;
            #product-info {
                width: 19rem;
            }
            img {
                height: 17rem;
                width: 17rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        #product-detail {
            width: 45rem;
            height: 33rem;
            #product-info {
                width: 19rem;
            }
            img {
                height: 17rem;
                width: 15rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        margin-top: 3rem;
        background-color: none;
        #product-detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: max-content;
            height: max-content;
            background-color: none;
            padding: 1rem;
            #product-info {
                width: 19rem; 
            }
            img {
                height: 17rem;
                width: 17rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        margin: 3rem .5rem 0rem .5rem;
        background-color: none;
        #product-detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: max-content;
            height: max-content;
            background-color: none;
            padding: 1rem;
            #product-info {
                width: 15rem; 
            }
            img {
                height: 15rem;
                width: 15rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
`;

const ProductDetail = () => {

    const [loading, setloading] = useState(true);
    const [product, setproduct] = useState(null);
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);
    const selectedproduct = useSelector((state) => state.cart.selectedproduct);

    // it will display the data from local storage
    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchproduct = async () => {
                try {
                    if (product) {
                        setproduct(selectedproduct);
                        setloading(false);
                    } else {
                        const storedproduct = localStorage.getItem('selectedproduct');
                        if (storedproduct) {
                            setproduct(JSON.parse(storedproduct));
                            setloading(false);
                        }
                    }
                } catch (error) {
                    console.log("Error in loading: ", error);
                }
            }
            fetchproduct();
        }, 1500)
        return () => clearTimeout(timer);
    }, [selectedproduct])

    // it will add the selected product to cart
    const handleaddcart = (item) => {
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
                <Styledsection>
                    <div>
                        <div id='product-detail'>
                            <div>
                                <img src={product.imageurl} alt="Product" />
                            </div>
                            <div id='product-info'>
                                <p id='category'>{product.category} / {product.name}</p>
                                <h3 id='name'>{product.name}</h3>
                                <p id='description'>{product.description}</p>
                                <p id='stock'>stock: {product.stock}</p>
                                {product.weigh && <p id='quantity'>Weight: {product.weigh} kg</p>}
                                {product.bunch && <p id='bunch'>Bunch: {product.bunch}</p>}
                                {product.size && <p id='size'>size: {product.size}</p>}
                                {product.dozen && <p id='dozen'>Dozen: {product.dozen}</p>}
                                <p id='price'>${product.price}</p>
                                <div id='plusminus'>
                                    <button className='btn btn-success' id='addtocart' onClick={() => handleaddcart(product)}> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Styledsection>
            )};
        </>
    );
}

export default ProductDetail;