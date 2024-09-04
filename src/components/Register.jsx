import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from '../firebase';
import { FcGoogle } from "react-icons/fc";

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
    div:nth-child(9) {
        position: absolute;
        top: 23%;
        right: 40%;
    }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: white;
        /* margin-top: 15rem; */
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

const Register = ({ setshowlogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmpassword, setCnfrmpassword] = useState('');
    const [alert, setalert] = useState(true);
    const [msg, setmsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setalert(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [alert]);


    const UserRegister = async (e) => {
        e.preventDefault();
        if ((email === "") && (password === "") && (cnfrmpassword === "")) {
            setmsg("Email & Password is required");
            setalert(true);
            return;
        }
        else if (email === '') {
            setmsg("Email is required");
            setalert(true);
            return;
        }
        else if (password === '') {
            setmsg("Password is required");
            setalert(true);
            return;
        }
        else if (cnfrmpassword === '') {
            setmsg("Confirm Password is required");
            setalert(true);
            return;
        }
        if (password !== cnfrmpassword) {
            setmsg("Password & Confirm Password does not match");
            setalert(true);
            setPassword('');
            setCnfrmpassword('');
            return;
        }
        else if ((email !== "") && (password !== "") && (cnfrmpassword !== "")) {
            try {
                const registercredentials = await createUserWithEmailAndPassword(auth, email, password);
                setmsg("Registration Successful");
                setalert(true);
                navigate('/Login');
                console.log("Account Created", registercredentials);
            } catch (error) {
                setmsg("User Already Existed");
                setalert(true);
                setEmail('');
                setPassword('');
                setCnfrmpassword('');
                console.log("Already Exists");
            }
        }
    }

    const googleregister = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("Token :", token);
            console.log("user :", user);
            navigate('/Login');
            console.log("Hello Ahmed");
        }).catch((error) => {
            const errorcode = error.code;
            const errormsg = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("errorcode: ", errorcode);
            console.log("errormessage: ", errormsg);
            console.log("email: ", email);
            console.log("credential: ", credential);
            navigate('/Register');
        })
    }

    return (
        <>
            <Styledloginpanel id='Registerpanel'>
                <div>
                    <Styledlogo src={logo} alt='SiteLogo' />
                </div>
                <h3>Make Some Change!</h3>
                <label>Email</label>
                <input type='email' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required id="email" />
                <label>Password</label>
                <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required id='password' />
                <label>Confirm Password</label>
                <input type='password' placeholder='Re-write your password' value={cnfrmpassword} onChange={(e) => setCnfrmpassword(e.target.value)} required id='cnfrmpassword' />
                <button onClick={UserRegister} >Register</button>
                <div>
                    <h5>Already have an account</h5>
                    <NavLink to="/Login" onClick={() => setshowlogin(true)}>Login</NavLink>
                </div>
                <div>
                    <button className='container' id='googlebutton' onClick={googleregister} ><FcGoogle size={"1.1rem"} id='googleicon' />Continue with Google</button>
                </div>
                {alert && (
                    <div id='firstmsg'>
                        {msg}
                    </div>
                )}
            </Styledloginpanel>
        </>
    )
}

export default Register;