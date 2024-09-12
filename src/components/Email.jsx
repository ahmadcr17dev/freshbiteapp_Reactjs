import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase/firebase";
import toast from "react-hot-toast";

const Styledsection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem 0rem 5rem 0rem;
    font-family: "poppins", sans-serif;
    label {
        text-align: center;
        color: black;
        font-size: 3rem;
        font-weight: 600;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        input {
            width: 40rem;
            height: 3rem;
            font-size: 1.1rem;
            padding: 0.3rem 0rem 0.3rem 1rem;
            margin: 0rem 0.5rem 0rem 0rem;
            border: 1px solid #696969;
            border-radius: 0.3rem;
        }
        button {
            font-size: 1.1rem;
            background-color: #696969;
            padding: 0rem 3rem 0rem 3rem;
            font-weight: 500;
            height: 3rem;
            color: white;
            border: 0px;
            border-radius: 0.3rem;
        }
        button:hover {
            cursor: pointer;
            background-color: black;
            transition: 0.5s;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        label {
            font-size: 2.4rem;
        }
        div {
            input {
                width: 35rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        label {
            font-size: 2.1rem;
        }
        div {
            input {
                width: 30rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        label {
            font-size: 1.6rem;
        }
        div {
            display: block;
            margin: 1rem 0rem 0rem 0rem;
            input {
                width: 23rem;
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            button {
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin: 0.5rem auto 0rem auto;
                text-align: center;
            }
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        label {
            font-size: 1.8rem;
        }
        div {
            display: block;
            margin: 1rem 0rem 0rem 0rem;
            input {
                width: 18rem;
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            button {
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin: 0.5rem auto 0rem auto;
                text-align: center;
            }
        }
    }
    #firstmsg {
        background-color: white;
        color: black;
        padding: 10px;
        position: fixed;
        top: 50%;
        right: 40%;
        left: auto;
        z-index: 1000;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
`;

const Email = () => {

    const [Email, setEmail] = useState('');

    const subscribe = async (e) => {
        e.preventDefault();
        if (Email === "") {
            toast.error("Email is required");
            return;
        }
        else if ((!Email.includes("@")) || (!Email.endsWith(".com"))) {
            toast.error('Put a valid email address');
            return;
        }
        else {
            try {
                const subscribeRef = collection(database, "Subscribe");
                const q = query(subscribeRef, where("Email", "==", Email));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    toast.error('Already Registered');
                    setEmail('');
                    return;
                }
                await addDoc(subscribeRef, { Email: Email });
                toast.success('Successfully Registered');
            } catch (error) {
                toast.error('Failed to Subscribe. Try again');
                setEmail('');
            }
        }
    }

    return (
        <>
            <Styledsection>
                <label>Subscribe To Our Newsletter</label>
                <div>
                    <input id="email" type="email" placeholder="Enter Your Email Address" required value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={subscribe} >Subscribe</button>
                </div>
            </Styledsection>
        </>
    );
}

export default Email;