import React, { useState } from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, database, provider } from '../firebase/firebase';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { doc, addDoc, collection, Timestamp, setDoc } from 'firebase/firestore';

const Styledlogo = styled.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`;
const Styledloginpanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 3rem auto 3rem auto;
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

const Register = () => {

    const [register, setregister] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });
    const [error, seterror] = useState(null);
    const navigate = useNavigate();

    // it will register the new user in firebase
    const UserRegister = async (e) => {
        e.preventDefault();
        seterror(null);
        try {
            const usercredentials = await createUserWithEmailAndPassword(auth, register.email, register.password);
            const user = usercredentials.user;
            console.log('User registered:', user);
            const usercollection = collection(database, 'user');
            await addDoc(usercollection, {
                name: register.name,
                email: user.email,
                uid: user.uid,
                role: register.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric',
                    }
                )
            });
            setregister({
                name: "",
                email: "",
                password: "",
            })
            toast.success("Registration Successful");
            navigate('/Login');
            console.log("Account Created", user);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error('The email address is already in use by another account.');
            }
            else {
                seterror(error.message);
            }
            // setEmail('');
            // setPassword('');
            // setCnfrmpassword('');
            // console.log("Already Exists");
        }
    }

    // it will create a new user with google option
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
                <form onSubmit={UserRegister}>
                    <div className="mb-0" style={{ flexDirection: "column" }}>
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="name" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='Name' required value={register.name} onChange={(e) => setregister({ ...register, name: e.target.value })} />
                    </div>
                    <div className="mb-0" style={{ flexDirection: "column" }}>
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required value={register.email} onChange={(e) => setregister({ ...register, email: e.target.value })} />
                    </div>
                    <div className="mb-0" style={{ flexDirection: "column" }}>
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' required value={register.password} onChange={(e) => setregister({ ...register, password: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary container">Submit</button>
                </form>
                <div className="register">
                    <h5>Already have an account</h5>
                    <NavLink to="/Login">Login</NavLink>
                </div>
                <div>
                    <button className='container' id='googlebutton' onClick={googleregister} ><FcGoogle size={"1.1rem"} id='googleicon' />Continue with Google</button>
                </div>
            </Styledloginpanel>
        </>
    )
}

export default Register;