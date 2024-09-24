import React, { useEffect, useState } from 'react';
import { database } from '../firebase/firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { IoCartSharp } from 'react-icons/io5';
import { MdLink } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addtocart, productdetail } from '../redux/CartSlice';
import { addtowishlist } from '../redux/wishlistslice';

const Styledsection = styled.section`
    margin: 10rem 2rem 5rem 2rem;
    display: block;
    justify-content: center;
    font-family: "poppins", sans-serif;
    #sidebar {
        margin: 1rem 0rem 0rem 0rem;
        width: max-content;
        #search {
            width: 20rem;
            height: 3rem;
            padding: .5rem 0rem .5rem 1.1rem;
            color: black;
            font-size: 1rem;
            background-color: whitesmoke;
            border: 1px solid #696969;
            margin: 1rem 0rem 0rem 0rem;
        }
        h1 {
            font-size: 2.1rem;
        }
    }
    #shop-products {
        img {
            width: 9rem;
            height: 9rem;
            display: block;
            margin: 1rem auto 0rem auto;
        }
        #category {
            font-size: 0.8rem;
            color: #898989;
            font-weight: 500;
        }
        #name {
            font-size: 1.5rem;
        }
        #price {
            color: red;
            font-size: .9rem;
        }
        #quantity {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #stock {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #size {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #bunch {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #dozen {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        p {
            line-height: .7rem;
        }
    }
    #icons {
        display: flex;
        justify-content: center;
        margin: 1.8rem 0rem 0rem 0rem;
        .icons {
            background-color: #898989;
            border-radius: 100%;
            color: white;
            height: 35px;
            width: 35px;
            margin: 0rem .1rem 0rem .1rem;
        }
        .icons:hover {
            background-color: black;
        }
        .icon {
            display: block;
            margin: .5rem auto auto auto;
            padding: auto;
        }
    }
    #buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button {
            border-radius: 100%;
            border: 0px solid black;
            background-color: beige;
            padding: .5rem;
            margin: 0rem 1rem 0rem 1rem;
            height: 3.5rem;
            width: 3.5rem;
            font-size: 1.5rem;
        }
    }
    @media (max-width: 899px) and (min-width: 0px) {
        #sidebar {
            display: none;
        }
    }
`;

const Shop = () => {

    const [allproducts, setallproducts] = useState([]);
    const [filterproduct, setfilterproduct] = useState([]);
    const [search, setsearch] = useState();
    const [loading, setloading] = useState(true);
    const [currentpage, setcurrentpage] = useState(1);
    const pagesize = 12;
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);
    const wishitems = useSelector((state) => state.wishlist);

    // it will display products from firebase
    useEffect(() => {
        const fetchallproducts = async () => {
            try {
                const productdocument = query(collection(database, 'shop'));
                const productsnap = await getDocs(productdocument);
                const productlist = productsnap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setallproducts(productlist);
                setfilterproduct(productlist);
                setloading(false);
            } catch (error) {
                console.log("Error:", error);
                setloading(true);
            }
        }
        fetchallproducts();
    }, []);

    // it will show result based on your search
    const handlesearch = (event) => {
        const term = event.target.value.toLowerCase();
        setsearch(term);
        if (term === '') {
            setfilterproduct(allproducts);
        } else {
            const filtered = allproducts.filter((product) => product.name.toLowerCase().includes(term));
            setfilterproduct(filtered);
        }
    }

    // for pagination logic
    const indexoflastproduct = currentpage * pagesize;
    const indexoffirstproduct = indexoflastproduct - pagesize;
    const currentproduct = filterproduct.slice(
        indexoffirstproduct,
        indexoflastproduct,
    );

    // for fetching next products
    const handlenextpage = () => {
        setcurrentpage((prevpage) => prevpage + 1);
    };

    // for fetching previous products
    const handlepreviouspage = () => {
        setcurrentpage((prevpage) => Math.max(prevpage - 1, 1));
    }

    // for adding to cart
    const handleaddcart = (item) => {
        const isProductInCart = cartitems.items.some(cartItem => cartItem.id === item.id);
        if (!isProductInCart) {
            dispatch(addtocart(item));
            toast.success(`${item.name} is added to the cart`);
        } else {
            toast.error(`${item.name} is already in the cart`);
        }
    }

    // for detail of product
    const handledetail = (item) => {
        dispatch(productdetail(item));
    }

    // for adding to wishlist
    const handlewishlist = (item) => {
        const isitemsexists = wishitems.items.some(wishitem => wishitem.id === item.id);
        if (!isitemsexists) {
            dispatch(addtowishlist(item));
            toast.success(`${item.name} is added to wishlist`);
        }
        else {
            toast.error(`${item.name} is already in the wishlist`);
        }
    }

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <>
                    <Styledsection>
                        <div id='shop-products' className='container'>
                            <div className="container">
                                <input className='container mb-3 p-3' style={{ height: '3rem' }} type='text' placeholder='search here' value={search} onChange={handlesearch} />
                                <div className='row'>
                                    {currentproduct.length > 0 ? (
                                        currentproduct.map((product) => (
                                            <div className='mb-3 col-md-3 col-lg-4 col-xl-3 col-6" mx-0' key={product.id} >
                                                <div className="card">
                                                    <img src={product.imageurl} className="card-img-top" alt='Product Picture' />
                                                    <div className="card-body">
                                                        <p className="card-text" id='category'>{product.category}</p>
                                                        <h5 className="card-title" id='name'>{product.name}</h5>
                                                        <p className="card-text" id='price'>${product.price}</p>
                                                        <p className='card-text' id='stock'>Stock: {product.stock}</p>
                                                        {product.weigh && <p className='card-text' id='quantity'>Quantity: {product.weigh}kg</p>}
                                                        {product.bunch && <p className='card-text' id='bunch'>Bunch: {product.bunch}</p>}
                                                        {product.size && <p className='card-text' id='size'>Size: {product.size} </p>}
                                                        {product.dozen && <p className="card-text" id='dozen'>Dozen: {product.dozen} </p>}
                                                        <div id='icons'>
                                                            <NavLink className='icons' to={'/ProductDetail'} onClick={() => handledetail(product)}><MdLink className='icon' size={"1.1rem"} /></NavLink>
                                                            <NavLink className='icons'><IoCartSharp className='icon' size={"1.1rem"} onClick={() => handleaddcart(product)} /></NavLink>
                                                            <NavLink className='icons'><IoMdHeart className='icon' size={"1.1rem"} onClick={() => handlewishlist(product)} /></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className='container card-text'> No Products </p>
                                    )}
                                </div>
                            </div>
                            <div id='buttons'>
                                <button onClick={handlepreviouspage} disabled={currentpage === 1} >&laquo;</button>
                                <button onClick={handlenextpage} disabled={indexoflastproduct >= filterproduct.length} >&raquo;</button>
                            </div>
                        </div>
                    </Styledsection >
                </>
            )}
        </>
    );
}

export default Shop;