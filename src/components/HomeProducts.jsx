import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { database } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Styledsection = styled.section`
    font-family: "poppins", sans-serif;
    margin: 10rem 0rem 1rem 0rem;
    h3 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 550;
    }
    .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1rem 0rem 1rem 0rem;
        i {
            color: #696969;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 450;
            margin: 0rem 0.5rem 0rem 0.5rem;
        }
        i:hover {
            color: black;
            cursor: pointer;
        }
    }
    img {
        width: 9rem;
        height: 8rem;
        display: block;
        margin: 1rem auto 1rem auto;
        background-color: lightgrey;
    }
    h5 {
        font-size: 1.3rem;
    }
    y {
        color: #696969;
        font-size: 1rem;
        font-weight: 500;
    }
    #vegies {
        margin: 5rem 0rem 1rem 0rem;
    }
    #fruits {
        margin: 5rem 0rem 1rem 0rem;
        display: none;
    }
    #others {
        margin: 5rem 0rem 1rem 0rem;
        display: none;
    }
    @media (max-width: 900px) and (min-width: 600px) {
        h5 {
            font-size: 1rem;
        }
        h3 {
            font-size: 1.9rem;
        }
        .links {
            i {
                font-size: 0.8rem;
            }
        }
        img {
            width: 8rem;
            height: 7rem;
        }
        p {
            font-size: 0.8rem;
        }
        y {
            font-size: 0.8rem;
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        img {
            width: 9rem;
            height: 8rem;
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        img {
            width: 8rem;
            height: 7rem;
        }
        p {
            font-size: 0.7rem;
        }
        h5 {
            font-size: 0.8rem;
        }
        h3 {
            font-size: 2.2rem;
        }
        .links {
            i {
                font-size: 0.8rem;
            }
        }
        y {
            font-size: 0.7rem;
        }
    }
`;

const HomeProducts = () => {

    const [vegproducts, setvegproducts] = useState([]);
    const [fruitproducts, setfruitproducts] = useState([]);
    const [otherproducts, setotherproducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const vegproductsCollection = collection(database, "HomeVegProducts");
            const vegproductsSnapshot = await getDocs(vegproductsCollection);
            const vegproductsList = vegproductsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setvegproducts(vegproductsList);

            const fruitproductscollection = collection(database, 'HomeFruitProducts');
            const fruitproductsnapshot = await getDocs(fruitproductscollection);
            const fruitproductlist = fruitproductsnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setfruitproducts(fruitproductlist);

            const otherproductscollection = collection(database, 'HomeOtherProducts');
            const otherproductsnapshot = await getDocs(otherproductscollection);
            const otherproductlist = otherproductsnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setotherproducts(otherproductlist);
        };

        fetchProducts();
    }, []);

    const vegiesactive = () => {
        document.getElementById("vegies").style.display = "flex";
        document.getElementById("fruits").style.display = "none";
        document.getElementById("others").style.display = "none";
    }

    const fruitactive = () => {
        document.getElementById("vegies").style.display = "none";
        document.getElementById("fruits").style.display = "flex";
        document.getElementById("others").style.display = "none";
    }

    const otheractive = () => {
        document.getElementById("vegies").style.display = "none";
        document.getElementById("fruits").style.display = "none";
        document.getElementById("others").style.display = "flex";
    }


    return (
        <>
            <Styledsection>
                <h3>Best Selling of August</h3>
                <div className='links'>
                    <i onClick={vegiesactive}>Vegies</i>
                    <i onClick={fruitactive}>Fruits</i>
                    <i onClick={otheractive}>Others</i>
                </div>
                <div>
                    <div id='vegies'>
                        <div className="container">
                            <div className="row">
                                {vegproducts.map((product, index) => (
                                    <div className="col-md-3 mb-3 col-6" key={index}>
                                        <div className="card">
                                            <img
                                                src={product.imageurl}
                                                className="card-img-top"
                                                alt={product.name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text" style={{ color: "red" }}> ${product.price}</p>
                                                {product.Bunch && (
                                                    <p className="card-text"><y>Bunch: </y> {product.Bunch}</p>
                                                )}
                                                {product.quantity && (
                                                    <p className="card-text"><y>Quantity: </y> {product.quantity}Kg</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id='fruits'>
                        <div className="container">
                            <div className="row">
                                {fruitproducts.map((product, index) => (
                                    <div className="col-md-3 mb-3 col-6" key={index}>
                                        <div className="card">
                                            <img
                                                src={product.imageurl}
                                                className="card-img-top"
                                                alt={product.name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text" style={{ color: "red" }}> ${product.price}</p>
                                                {product.dozen && (
                                                    <p className="card-text"><y>Dozen: </y> {product.dozen}</p>
                                                )}
                                                {product.quantity && (
                                                    <p className="card-text"><y>Quantity: </y> {product.quantity} Kg</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id='others'>
                        <div className="container">
                            <div className="row">
                                {otherproducts.map((product, index) => (
                                    <div className="col-md-3 mb-3 col-6" key={index}>
                                        <div className="card">
                                            <img
                                                src={product.imageurl}
                                                className="card-img-top"
                                                alt={product.name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text" style={{ color: "red" }}> ${product.price}</p>
                                                {product.size && (
                                                    <p className="card-text"><y>Size: </y> {product.size}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Styledsection>
        </>
    );
}

export default HomeProducts;