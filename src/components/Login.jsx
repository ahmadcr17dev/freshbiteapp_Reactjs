import React, { useState } from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../firebase/firebase';
import toast from 'react-hot-toast';
import { collection, onSnapshot, QuerySnapshot, where, query } from 'firebase/firestore';

const Styledlogo = styled.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`;
const Styledloginpanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 5rem auto 3rem auto;
    border: 1px solid #696969;
    padding: 1rem;
    border-radius: 10px;
    font-family: "poppins" ,sans-serif;
    h3 {
        font-size: 1.5rem;
        color: red;
        margin-bottom: 2rem;
    }
    label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #696969;
    }
    input {
        font-size: 0.8rem;
        padding-left: 0.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        border: 1px solid #696969;
        margin-top: 0rem;
        margin-bottom: 1rem;
    }
    button {
        background-color: #696969;
        color: white;
        font-size: 15px;
        padding: 0.5rem 0rem 0.5rem 0rem;
        border-radius: 0.3rem;
        font-weight: 500;
        margin: 1rem 0rem 0rem 0rem;
        border: 1px solid #696969;
    }
    button:hover {
        background-color: #000000;
        transition: 1s;
        cursor: pointer;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0.3rem;
        h5 {
            font-size: 0.7rem;
        }
        a {
            color: blue;
            font-size: 0.8rem;
            text-decoration: none;
            margin-top: -0.1rem;
        }
    }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: white;
        margin-top: 15rem;
        margin-bottom: 5rem;
    }
`;

const Login = () => {

    const [login, setlogin] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    // it will check the credentials of auth 
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const users = await signInWithEmailAndPassword(auth, login.email, login.password);
            try {
                const q = query(
                    collection(database, 'user'),
                    where('uid', '==', users?.user?.uid)
                )
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem('users', JSON.stringify(user));
                    setlogin({
                        email: '',
                        password: '',
                    })
                    toast.success("Login Successful");
                    console.log('User logged in:', users.user);
                    if (user.role === "user") {
                        navigate('/Home');
                    }
                });
                return () => data;
            }
            catch (error) {
                console.log("error", error)
            }
        } catch (error) {
            toast.error("Login not found");
            setlogin({
                email: "",
                password: ""
            })
        }
    }

    return (
        <>
            <Styledloginpanel id='loginpanel'>
                <div>
                    <Styledlogo src={logo} alt='SiteLogo' />
                </div>
                <h3>Welcome back!</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-0" style={{ flexDirection: "column" }}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required value={login.email} onChange={(e) => setlogin({ ...login, email: e.target.value })} />
                    </div>
                    <div className="mb-0" style={{ flexDirection: "column" }}>
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' required value={login.password} onChange={(e) => setlogin({ ...login, password: e.target.value })} />
                        <button type='submit' >Login</button>
                    </div>
                </form>
                <div className="register">
                    <h5>Don't have an account</h5>
                    <NavLink to="/Register">Register</NavLink>
                </div>
            </Styledloginpanel>
        </>
    )
}

export default Login;