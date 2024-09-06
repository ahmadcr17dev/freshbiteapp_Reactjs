import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { database } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { MoonLoader } from "react-spinners";

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
`;

const Checkout = () => {

    const [products, setproducts] = useState('');
    const [loading, setloading] = useState(true);
    const [name, setname] = useState('');
    const [house, sethouse] = useState('');
    const [street, setstreet] = useState('');
    const [zip, setzip] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [payment, setpayment] = useState('');
    const [city, setcity] = useState('');
    const [storedprice, setstoredprice] = useState(0);
    const [shipping, setshipping] = useState(3);
    const [dozen, setdozen] = useState(1);

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
                    const price = parseFloat(localStorage.getItem('price')) || 0;
                    setstoredprice(price);
                    const ship = parseFloat(localStorage.getItem('ship')) || 3;
                    setshipping(parseFloat(ship + price).toFixed(2));
                    const storedname = localStorage.getItem('productname');
                    if (storedname) {
                        setproducts(storedname);
                    }
                    const dozen = parseFloat(localStorage.getItem('dozen')) || 1;
                    setdozen(dozen);
                    setloading(false);
                } catch (error) {
                    setloading(true);
                }
            }
            fetchs();
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const confirmorder = async (e) => {
        e.preventDefault();
        try {
            const billingdoc = collection(database, 'billinginfo');
            await addDoc(billingdoc, {
                fname: name,
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
                                <label for="firstname" className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="first name" value={name} onChange={(e) => setname(e.target.value)} required />
                            </div>
                            <div className="col-12">
                                <label for="address1" className="form-label">Enter House No.</label>
                                <input type="text" className="form-control" placeholder="Enter your house no." required value={house} onChange={(e) => sethouse(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label for="address2" className="form-label">Enter street address</label>
                                <input type="text" className="form-control" placeholder="Enter street address" required value={street} onChange={(e) => setstreet(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">State</label>
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
                                <label for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" placeholder="zip code" required value={zip} onChange={(e) => setzip(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputcell" className="form-label">Phone</label>
                                <input type="cell" className="form-control" placeholder="phone" required value={phone} onChange={(e) => setphone(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <label for="inputemail" className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="email address" required value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                        </div>
                        <div id="myorder">
                            <h5>Your Order</h5>
                            <div id="price">
                                <p>{products} <br /> <p style={{ fontWeight: "400", fontSize: "0.8rem" }}>Quantity: {dozen}</p> </p>
                                <p>${storedprice}</p>
                            </div>
                            <div id="subtotal">
                                <p>SubTotal</p>
                                <p style={{ color: "red" }}>${storedprice}</p>
                            </div>
                            <div id="subtotal">
                                <p>Shipping</p>
                                <p style={{ color: "red" }}>$3.00</p>
                            </div>
                            <hr />
                            <div id="total">
                                <p>Total</p>
                                <p style={{ color: "red" }}>${shipping}</p>
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