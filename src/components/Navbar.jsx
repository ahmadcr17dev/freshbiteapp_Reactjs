import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import { PiShoppingCartLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Styledlogo = styled.img`
    width: 7rem;
    height: 5rem;
    @media (max-width: 600px) and (min-width: 0px) {
        width: 7rem;
        height: 5rem;
        margin-left: -1.7rem;
    }
`;
const Stylednavbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "poppins", sans-serif;
    padding: 10px 15px 10px 15px;
    background-color: none;
    ul {
        margin-top: 40px;
        a {
            color: black;
            text-decoration: none;
            font-size: 17px;
            font-weight: normal;
            padding: 0px 15px 0px 15px;
        }
        a:hover {
            color: red;
        }
        a:nth-child(4) {
            font-size: 0px;
            display: none;
        }
    }
    div:nth-child(3) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30px;
        div {
            padding: 0px 15px 0px 15px;
            margin-top: 8px;
            span {
                position: absolute;
                top: 2.7rem;
                right: 8.7rem;
                font-size: 10px;
                border-radius: 100%;
                background-color: red;
            }
        }
        a:nth-child(2) {
            background-color: none;
            font-size: 17px;
            color: black;
            text-decoration: none;
            padding: 5px 35px 10px 35px;
            height: 2.4rem;
            border-radius: 8px;
            border: 1px solid #696969;
        }
        a:nth-child(2):hover {
            background-color: #696969;
            transition: 0.5s;
            color: white;
        }
    }
    #logout {
        font-size: 1rem;
        padding: 5px 30px 0px 30px;
    }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: #fff;
        margin-top: 19px;
        ul {
            display: none;
            flex-direction: column;
            margin-top: 100px;
            position: absolute;
            left: -1%;
            padding: 1.9rem 0rem 1rem 1.5rem;
            a {
                font-size: 1rem;
                padding: 15px 15px 15px 0px;
            }
            a:nth-child(4) {
                font-size: 1rem;
                display: block;
                background-color: #696969;
                padding: 10px 0px 10px 0px;
                color: white;
                border-radius: 0.4rem;
                font-weight: 500;
                width: 100%;
                text-align: center;
                margin-top: 5px;
            }
        }
        div:nth-child(3) {
            margin-top: 1.5rem;
            div {
                span {
                    position: absolute;
                    top: 3.3rem;
                    right: 4.4rem;
                }
            }
            a {
                margin-top: 10px;
                margin-right: 10px;
            }
            a:nth-child(2) {
                display: none;
            }
        }
    }
`;
const Styledbars = styled.a`
    @media (max-width: 4000px) and (min-width: 601px) {
        display: none;
        width: 0%;
    }
    @media (max-width: 600px) and (min-width: 0px) {
        display: block;
        color: black;
        :hover {
            color: black;
        }
    }
`;

const Navbar = ({ setshowlogin }) => {

    const [user, setuser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const activeuser = onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                setuser(currentuser);
            }
            else {
                setuser(null);
            }
        });
        return () => activeuser();
    }, [])

    const handlelogout = async () => {
        try {
            await signOut(auth);
            navigate("/Home");
        } catch (error) {
            console.log("error", error);
        }
    }


    const mobilemenu = () => {
        let sideopen = document.getElementById("menuopen");
        if (sideopen.style.display !== "none") {
            sideopen.style.display = "none";
            sideopen.style.backgroundColor = "white";
            sideopen.style.width = "100%";
        }
        else {
            sideopen.style.display = "flex";
            sideopen.style.backgroundColor = "none";
        }
    }

    return (
        <>
            <Stylednavbar>
                <div>
                    <Styledlogo src={logo} alt='SiteLogo' />
                </div>
                <div>
                    <ul id='menuopen'>
                        <NavLink to="/Home">Home</NavLink>
                        <NavLink to='/shop'>Shop</NavLink>
                        <a href='#'>About</a>
                        <NavLink to="/Login" onClick={() => setshowlogin(true)}>Login</NavLink>
                    </ul>
                </div>
                <div>
                    <div>
                        <a href='#'>{<PiShoppingCartLight size={"1.7rem"} color={"#383838"} />}</a>
                        <span className="badge badge-danger">0</span>
                    </div>
                    {user ? (
                        <NavLink onClick={handlelogout} id='logout'>LogOut</NavLink>
                    ) : (
                        <NavLink to="/Login" onClick={() => setshowlogin(true)} >Login</NavLink>
                    )}
                    <Styledbars href='#'>{<FaBars size={"1.7rem"} onClick={mobilemenu} />}</Styledbars>
                </div>
            </Stylednavbar>
        </>
    )
}

export default Navbar;