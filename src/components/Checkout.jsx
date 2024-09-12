import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { database } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { MoonLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { totalquantity, selectCartSubtotal } from "../redux/CartSlice";

const Styledsection = styled.section`
    font-family: "poppins", sans-serif;
    display: block;
    margin: 5rem auto 5rem auto;
    border: 1px solid #898989;
    border-radius: 1rem;
    width: 85%;
    height: max-content;
    padding: 3rem 1rem 3rem 1rem;
    #myform {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #formcontent {
        h1 {
            font-size: 1.9rem;
        }
        label {
            font-size: .9rem;
        }
        input {
            font-size: .9rem;
        }
        select {
            font-size: .9rem;
            margin: 0rem 0rem 0rem 1rem;
            width: 10rem;
        }
        option {
            width: 10rem;;
        }
    }
    #myorder {
        width: 100%;
        border: 1px solid #898989;
        margin: 0rem 0rem 0rem 1rem;
        padding: 3rem 1rem 1rem 1rem;
        border-radius: 0.3rem;
        h5 {
            font-size: 1.5rem;
            margin: 0rem 0rem 1rem 0rem;
        }
        #price {
            display: flex;
            justify-content: space-between;
        }
        #price p:nth-child(1) {
            color: #898989;
            font-size: 1rem;
            font-weight: 450;
        }
        #price p:nth-child(2) {
            color: black;
            font-size: 1rem;
            font-weight: 500;
        }
        #subtotal {
            display: flex;
            justify-content: space-between;
            margin: 0rem 0rem 0rem 0rem;
            font-size: 1rem;
            font-weight: 500;
        }
        #total {
            display: flex;
            justify-content: space-between;
            margin: 1.5rem 0rem 0rem 0rem;
            font-size: 1.5rem;
            font-weight: 500;
        }
        h6 {
            font-size: 1.5rem;
            margin: 1.9rem 0rem 1rem 0rem;
        }
        label {
            font-size: .9rem;
            margin: 0rem 0rem 0rem .5rem;
        }
        input {
            size: 1rem;
        }
        #para {
            font-size: .9rem;
            margin: 3rem 0rem 3rem 0rem;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #myorder {
            width: 150%;
        }
        #myform {
            select {
                width: 5rem;
            }
            option {
                width: 5rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        #formcontent {
            h1 {
                font-size: 1.5rem;
            }
            label {
                font-size: .8rem;
            }
            input {
                font-size: .8rem;
            }
            select {
                font-size: .8rem;
                margin: 0rem .3rem 0rem 0rem;
                width: 4rem;
            }
            option {
                width: 4rem;
            }
        }
        #myorder {
        width: 170%;
        border: 1px solid #898989;
        margin: 0rem 0rem 0rem 1rem;
        padding: 3rem 1rem 1rem 1rem;
        border-radius: 0.3rem;
        h5 {
            font-size: 1.3rem;
            margin: 0rem 0rem 1rem 0rem;
        }
        #price {
            display: flex;
            justify-content: space-between;
        }
        #price p:nth-child(1) {
            color: #898989;
            font-size: .8rem;
            font-weight: 450;
        }
        #price p:nth-child(2) {
            color: black;
            font-size: .8rem;
            font-weight: 500;
        }
        #subtotal {
            display: flex;
            justify-content: space-between;
            margin: 0rem 0rem 0rem 0rem;
            font-size: .8rem;
            font-weight: 500;
        }
        #total {
            display: flex;
            justify-content: space-between;
            margin: 1.5rem 0rem 0rem 0rem;
            font-size: 1.3rem;
            font-weight: 500;
        }
        h6 {
            font-size: 1.19rem;
            margin: 1.9rem 0rem 1rem 0rem;
        }
        label {
            font-size: .8rem;
            margin: 0rem 0rem 0rem .5rem;
        }
        input {
            size: .9rem;
        }
        #para {
            font-size: .7rem;
            margin: 3rem 0rem 3rem 0rem;
        }
    }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        border: 0px solid black;
        display: block;
        margin: 3rem 0rem 1rem 0rem;
        #myform {
            display: flex;
            flex-direction: column; 
            width: 110%;
        }
        #formcontent {
            border: 1px solid #898989;
            padding: 1rem;
            border-radius: 1rem;
            display: block;
            margin: 0rem auto 0rem auto;
        }
        #myorder {
            display: block;
            margin: 3rem auto 1rem auto;
            border-radius: 1rem;
            width: 100%;
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        border: 0px solid black;
        display: block;
        margin: 3rem 0rem 1rem 0rem;
        #myform {
            display: flex;
            flex-direction: column; 
            width: 119%;
        }
        #formcontent {
            border: 1px solid #898989;
            padding: 1rem;
            border-radius: 1rem;
            display: block;
            margin: 0rem auto 0rem auto;
            h1 {
                font-size: 1.3rem;
            }
        }
        #myorder {
            display: block;
            margin: 3rem auto 1rem auto;
            border-radius: 1rem;
            width: 100%;
        }
    }
`;

const Checkout = () => {

    const [loading, setloading] = useState(true);
    const [fullname, setfullname] = useState("");
    const [house, sethouse] = useState('');
    const [street, setstreet] = useState('');
    const [zip, setzip] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [payment, setpayment] = useState('');
    const [city, setcity] = useState('');
    const totalitems = useSelector(totalquantity);
    const totalprice = useSelector(selectCartSubtotal);

    const data = {
        "Islamabad": ["Islamabad"],
        "Punjab": ["Lahore", "Rawalpindi", "Faisalabad", "Multan", "Sargodha", "Bahawalpur"],
        "Sindh": ["Karachi", "Hydrabad", "Sakkhar"],
        "Balochistan": ["Quetta", "Sibbi", "Gawadar"],
        "Khyber Pakhtunkhwa": ["Peshawar", "Abbotabad", "Swat", "Mardaan"],
        "Azad Kashmir": ["Muzzaffarabad", "Rawalkot", "Neelum Valley"],
        "Gilgit Baltistan": ["Balakot", "Skardu"]
    };

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setCities(data[state] || []);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchs = async () => {
                try {
                    setloading(false);
                }
                catch (error) {
                    console.log("Error is:", error);
                }
            };
            fetchs();
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const confirmorder = async (e) => {
        e.preventDefault();
        try {
            const billingdoc = collection(database, 'billinginfo');
            await addDoc(billingdoc, {
                fname: fullname,
                house: house,
                street: street,
                state: selectedState,
                city: city,
                zip: zip,
                phone: phone,
                email: email,
                payment: payment,
            });
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <>
            {loading ? (
                <p className='container d-flex justify-content-center align-items-center' style={{ marginTop: "5rem" }}> <MoonLoader size={60} color={"red"} /> </p>
            ) : (
                <Styledsection>
                    <form id="myform" className="form-check" onSubmit={confirmorder}>
                        <div id="formcontent" className="row g-3">
                            <h1>Billing Information</h1>
                            <div className="col-md-12">
                                <label htmlFor="firstname" className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="first name" value={fullname} onChange={(e) => setfullname(e.target.value)} required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="address1" className="form-label">Enter House No.</label>
                                <input type="text" className="form-control" placeholder="Enter your house no." required value={house} onChange={(e) => sethouse(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="address2" className="form-label">Enter street address</label>
                                <input type="text" className="form-control" placeholder="Enter street address" required value={street} onChange={(e) => setstreet(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <select onChange={handleStateChange} value={selectedState} required>
                                    <option value="">Select a state</option>
                                    {Object.keys(data).map((state) => (
                                        <option key={state} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label>Select City:</label>
                                <select required value={city} onChange={(e) => setcity(e.target.value)}>
                                    <option value="">Select a city</option>
                                    {cities.length > 0 ? (
                                        cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>No cities available</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" placeholder="zip code" required value={zip} onChange={(e) => setzip(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputcell" className="form-label">Phone</label>
                                <input type="cell" className="form-control" placeholder="phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputemail" className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="email address" required value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                        </div>
                        <div id="myorder">
                            <h5>Your Order</h5>
                            <div id="price">
                                <p>Total Items</p>
                                <p>{totalitems} items</p>
                            </div>
                            <div id="subtotal">
                                <p>SubTotal</p>
                                <p style={{ color: "black" }}>${parseFloat(totalprice).toFixed(2)}</p>
                            </div>
                            <div id="subtotal">
                                <p>Shipping</p>
                                <p style={{ color: "black" }}>$5.00</p>
                            </div>
                            <hr />
                            <div id="total">
                                <p>Total</p>
                                <p style={{ color: "red" }}>${parseFloat(totalprice + 5).toFixed(2)}</p>
                            </div>
                            <hr />
                            <h6>Payment Methods</h6>
                            <div>
                                <input type="radio" required name="option" value="Direct Bank Transfer" checked={payment === 'Direct Bank Transfer'} onChange={(e) => setpayment(e.target.value)} />
                                <label htmlFor="Direct Bank Transfer">Direct Bank Transfer</label>
                            </div>
                            <div>
                                <input type="radio" required name="option" value="Cash on Deliverey" onChange={(e) => setpayment(e.target.value)} checked={payment === 'Cash on Deliverey'} />
                                <label htmlFor="Cash on Deliverey">Cash on Deliverey</label>
                            </div>
                            <p id="para">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                            <button type="submit" className="container btn btn-danger">Confirm order</button>
                        </div>
                    </form>
                </Styledsection >
            )}
        </>
    );
}

export default Checkout;