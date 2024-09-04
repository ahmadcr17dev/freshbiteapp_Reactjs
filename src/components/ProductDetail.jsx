import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { database } from '../firebase';
import { MoonLoader } from 'react-spinners';

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
        height: 35rem;
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
        }
        #description {
            font-size: 1rem;
            color: #898989;
            font-weight: 500;
            margin: 1.8rem 0rem 0rem 0rem;
        }
        #quantity {
            font-size: 1rem;
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
        width: 13rem;
        font-size: 1.1rem;
        padding: .5rem 1.9rem .5rem 1.9rem;
        font-weight: 470;
    }
    #placeorder {
        width: 20.77rem;
        font-size: 1.1rem;
        font-weight: 490;
        padding: .5rem 1.9rem .5rem 1.9rem; 
        margin: 1rem 0rem 0rem 0rem;
    }
`;

const ProductDetail = () => {

    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(true);
    const [number, setnumber] = useState(1);
    const [price, setPrice] = useState(product.price);
    const [initialPrice, setInitialPrice] = useState(0);

    useEffect(() => {
        const delay = setTimeout(() => {
            const fetchproducts = async () => {
                try {
                    const allproductscollection = collection(database, 'productdetails');
                    const allproductssnapshot = await getDocs(allproductscollection);
                    const allproductslist = allproductssnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setproduct(allproductslist);
                    setloading(false);
                }
                catch (error) {
                    setloading(true);
                }
                const pricescollection = collection(database, 'productdetails');
                const pricesnapshot = await getDocs(pricescollection);
                if (!pricesnapshot.empty) {
                    const pricedata = pricesnapshot.docs[0].data();
                    setInitialPrice(pricedata.price);
                    setPrice(pricedata.price);
                }
            };
            fetchproducts();
        }, 5000)
        return () => clearTimeout(delay);
    }, [])

    // if (loading) {
    //     <BounceLoader size={"6rem"} id='loader' />
    // }

    const handleincrement = () => {
        setnumber(number + 1);
        setPrice(prevPrice => (parseFloat(prevPrice) + initialPrice).toFixed(2));
    }

    const handledecrement = () => {
        setnumber(number - 1);
        setPrice(prevPrice => (parseFloat(prevPrice) - initialPrice).toFixed(2));
    }

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{marginTop: "5rem"}}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <Styledsection>
                    <div>
                        {
                            product.map((product) => (
                                <div key={product.id} id='product-detail'>
                                    <div>
                                        <img src={product.imageurl} alt="Product" />
                                    </div>
                                    <div id='product-info'>
                                        <p id='category'>{product.category} / {product.name}</p>
                                        <h3 id='name'>{product.name}</h3>
                                        <p id='description'>{product.description}</p>
                                        <p id='stock'>stock: {product.stock}</p>
                                        {product.quantity && <p id='quantity'>Quantity: {product.quantity} kg</p>}
                                        {product.bunch && <p id='bunch'>Bunch: {product.bunch}</p>}
                                        {product.size && <p id='size'>size: {product.size}</p>}
                                        {product.dozen && <p id='dozen'>Dozen: {product.dozen}</p>}
                                        <p id='price'>$ {price}</p>
                                        <div id='plusminus'>
                                            <button className='btn btn-danger' onClick={handledecrement} disabled={number <= 1}>-</button>
                                            <input type='text' value={number} readOnly />
                                            <button className='btn btn-danger' onClick={handleincrement} disabled={number >= product.stock}>+</button>
                                            <button className='btn btn-success' id='addtocart'> Add to cart</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger' id='placeorder'>Place an Order</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Styledsection>
            )};
        </>
    );
}

export default ProductDetail;