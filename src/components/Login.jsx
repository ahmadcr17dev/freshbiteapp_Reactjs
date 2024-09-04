import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Styledlogo = styled.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`;
const Styledloginpanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 1.7rem auto 3rem auto;
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
    //div:nth-child(9) {
    //    position: absolute;
    //    top: 23%;
    //    right: 40%;
   // }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: white;
        margin-top: 15rem;
        margin-bottom: 5rem;
    }
    #firstmsg {
        background-color: white;
        color: black;
        padding: 10px;
        position: fixed;
        top: 47%;
        right: 30%;
        left: auto;
        z-index: 1000;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
    #googlebutton {
        background-color: whitesmoke;
        color: #595959;
    }
    #googlebutton:hover {
        background-color: white;
    }
    #googleicon {
        margin: -.1rem .5rem 0rem 0rem;
    }
`;

// const auth = getAuth(app);

const Login = ({ setshowregister }) => {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [alert, setalert] = useState(true);
    const [firstmsg, setfirstmsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setalert(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [alert]);


    const handleLogin = async (e) => {
        e.preventDefault();
        if ((email === "") && (password === "")) {
            setfirstmsg('Email & Password is required');
            setalert(true);
            return;
        }
        else if (email === "") {
            setfirstmsg("Email is required");
            setalert(true);
            return;
        }
        else if (password === "") {
            setfirstmsg("Password is required");
            setalert(true);
            return;
        }
        else if ((email !== "") && (password !== "")) {
            if ((!email.includes("@")) || (!email.endsWith(".com"))) {
                setfirstmsg("Put a valid Email Address");
                setalert(true);
                return;
            }
            else {
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    console.log('User logged in:', userCredential.user);
                    navigate('/Home');
                    // Redirect or perform other actions after successful login
                } catch (error) {
                    setfirstmsg("Login not found");
                    setalert(true);
                    SetEmail("");
                    SetPassword("");
                    return;
                }
            }
        }
    };

    return (
        <>
            <Styledloginpanel id='loginpanel'>
                <div>
                    <Styledlogo src={logo} alt='SiteLogo' />
                </div>
                <h3>Welcome back!</h3>
                <label>Email</label>
                <input type='email' placeholder='Enter your Email' value={email} onChange={(e) => SetEmail(e.target.value)} id='email' required />
                <label>Password</label>
                <input type='password' placeholder='Enter your Password' value={password} onChange={(e) => SetPassword(e.target.value)} id='password' required />
                <button onClick={handleLogin}>Login</button>
                <div className="register">
                    <h5>Don't have an account</h5>
                    <NavLink to="/Register" onClick={() => setshowregister(true)} >Register</NavLink>
                </div>
                {alert && (
                    <div id='firstmsg'>
                        {firstmsg}
                    </div>
                )}
            </Styledloginpanel>
        </>
    )
}

export default Login;