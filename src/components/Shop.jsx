import React, { useEffect, useState } from 'react';
import { database } from '../firebase/firebase';
import { collection, getDocs, limit, orderBy, startAfter, query } from 'firebase/firestore';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { IoCartSharp } from 'react-icons/io5';
import { MdLink } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import Layout from './Layout';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addtocart, productdetail } from '../redux/CartSlice';

const Styledsection = styled.section`
    margin: 10rem 2rem 5rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
        justify-content: space-evenly;
        margin: 1.8rem 0rem 0rem 0rem;
        .icons {
            background-color: #898989;
            border-radius: 100%;
            color: white;
            height: 35px;
            width: 35px;
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
`;

const Shop = () => {

    const [allproducts, setallproducts] = useState([]);
    const [search, setsearch] = useState();
    const [loading, setloading] = useState(true);
    const [lastdoc, setlastdoc] = useState(null);
    const [currentpage, setcurrentpage] = useState(1);
    const pagesize = 12;
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);

    const fetchproducts = async () => {
        try {
            const q = query(collection(database, 'shop'), orderBy('name'), limit(pagesize));
            const querysnapshot = await getDocs(q);
            const productarray = querysnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setallproducts(productarray);
            setlastdoc(querysnapshot.docs[querysnapshot.docs.length - 1]);
            setcurrentpage(currentpage - 1);
            setloading(false);
        } catch (error) {
            console.log("Error in fetching:", error);
        }
    }

    const nextfetch = async () => {
        try {
            if (lastdoc) {
                const q = query(collection(database, 'shop'), orderBy('name'), startAfter(lastdoc), limit(pagesize));
                const querysnapshot = await getDocs(q);
                const productarray = querysnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                if (productarray.length > 0) {
                    setallproducts(productarray);
                    setlastdoc(querysnapshot.docs[querysnapshot.docs.length - 1]);
                    setcurrentpage(currentpage + 1);
                    setloading(false);
                }
            }
        }
        catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        fetchproducts();
    }, [])

    const handleaddcart = (item) => {
        const isProductInCart = cartitems.items.some(cartItem => cartItem.id === item.id);
        if (!isProductInCart) {
            dispatch(addtocart(item));
            toast.success(`${item.name} is added to the cart`);
        } else {
            toast.error(`${item.name} is already in the cart`);
        }
    }

    const handledetail = (item) => {
        dispatch(productdetail(item));
    }

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <Layout>
                    <Styledsection>
                        <div id='sidebar'>
                            <h1>Filter</h1 >
                            <input id='search' type="text" placeholder="Search here..." value={search} onChange={(e) => setsearch(e.target.value)} />
                            <h5 className='mt-3'>Search by Category</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Vegetables
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Fruits
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Dairy
                                    </label>
                            </div>
                        </div >
                        <div id='shop-products'>
                            <div className="container">
                                <div className='row'>
                                    {allproducts.map((product) => (
                                        <div className='col-md-3 mb-3 col-6 mx-0' key={product.id} >
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
                                                        <NavLink className='icons'><IoMdHeart className='icon' size={"1.1rem"} /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))};
                                </div>
                            </div>
                            <div id='buttons'>
                                <button onClick={() => { setcurrentpage(currentpage - 1); fetchproducts(); }} disabled={currentpage === 1} >&laquo;</button>
                                <button onClick={nextfetch}>&raquo;</button>
                            </div>
                        </div>
                    </Styledsection >
                </Layout>
            )}
        </>
    );
}

export default Shop;