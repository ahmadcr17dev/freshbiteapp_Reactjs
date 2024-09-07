import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { collection, getDocs, setDoc, doc, deleteDoc, query } from 'firebase/firestore';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { IoCartSharp } from 'react-icons/io5';
import { MdLink } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';

const Styledsection = styled.section`
    margin: 10rem 2rem 5rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "poppins", sans-serif;
    #sidebar {
        margin: 1rem 0rem 0rem 0rem;
        input {
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
`;

const Shop = () => {

    const [allproducts, setallproducts] = useState([]);
    const [search, setsearch] = useState();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const allproductscollection = collection(database, 'shop');
                const allproductssnapshot = await getDocs(allproductscollection);
                const allproductslist = allproductssnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setallproducts(allproductslist);
                setloading(false);
            }
            catch (error) {
                setloading(true);
            }
        };
        fetchproducts();
    }, [])

    const buynow = async (product) => {
        try {
            const q = query(collection(database, 'productdetails'));
            const querysnap = await getDocs(q);
            querysnap.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            })

            const productdata = {
                name: product.name,
                price: product.price,
                imageurl: product.imageurl,
                stock: product.stock,
                category: product.category,
                description: product.description,
            }
            if (product.quantity) {
                productdata.quantity = product.quantity;
            }
            if (product.bunch) {
                productdata.bunch = product.bunch;
            }
            if (product.dozen) {
                productdata.dozen = product.dozen;
            }
            if (product.size) {
                productdata.size = product.size;
            }
            await setDoc(doc(database, "productdetails", product.id), productdata);
        }
        catch (e) {
            alert("Error Occured");
        }
    };

    const handlebuynow = async (product) => {
        await buynow(product);
    };

    const addtocart = async (product) => {
        if (!product) return;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to the cart`);
        console.log(JSON.parse(localStorage.getItem('cart')));
    }

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <Styledsection>
                    <div id='sidebar'>
                        <h1>Filter</h1 >
                        <input type="text" placeholder="Search here..." value={search} onChange={(e) => setsearch(e.target.value)} />
                    </div >
                    <div id='shop-products'>
                        <div className="container">
                            <div className='row'>
                                {allproducts.map((product) => (
                                    <div className='col-md-3 mb-3 col-6 mx-0' key={product.id} >
                                        <div className="card">
                                            <img src={product.imageurl} className="card-img-top" alt='Ahmad' />
                                            <div className="card-body">
                                                <p className="card-text" id='category'>{product.category}</p>
                                                <h5 className="card-title" id='name'>{product.name}</h5>
                                                <p className="card-text" id='price'>${product.price}</p>
                                                <p className='card-text' id='stock'>Stock: {product.stock}</p>
                                                {product.quantity && <p className='card-text' id='quantity'>Quantity: {product.quantity}kg</p>}
                                                {product.bunch && <p className='card-text' id='bunch'>Bunch: {product.bunch}</p>}
                                                {product.size && <p className='card-text' id='size'>Size: {product.size} </p>}
                                                {product.dozen && <p className="card-text" id='dozen'>Dozen: {product.dozen} </p>}
                                                <div id='icons'>
                                                    <NavLink className='icons' to={'/ProductDetail'} onClick={() => handlebuynow(product)}><MdLink className='icon' size={"1.1rem"} /></NavLink>
                                                    <NavLink className='icons' onClick={() => addtocart(product)}><IoCartSharp className='icon' size={"1.1rem"} /></NavLink>
                                                    <NavLink className='icons'><IoMdHeart className='icon' size={"1.1rem"} /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))};
                            </div>
                        </div>
                        <div id='buttons'>
                            <button >&laquo;</button>
                            <button >&raquo;</button>
                        </div>
                    </div>
                </Styledsection >
            )}

        </>
    );
}

export default Shop;