import React from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import { PiShoppingCartLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";

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
    #cross {
        display: none;
    }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: #fff;
        margin-top: 19px;
        ul {
            display: none;
            flex-direction: column;
            position: fixed;
            left: 0;
            top: 0;
            width: 0;
            height: 100vh;
            background-color: white;
            text-align: center;
            padding-top: 1rem;
            z-index: 1;
            transition: .5s;
            overflow-x: hidden;
            a {
                font-size: 1rem;
                padding: 15px 15px 15px 0px;
            }
            a:nth-child(4) {
                display: block;
                margin-bottom: 1rem;
            }
            a:nth-child(1) {
                margin-top: 3rem;
            }
        }
        div:nth-child(3) {
            margin-top: 1.5rem;
            div {
                span {
                    position: absolute;
                    top: 3.3rem;
                    right: 4.4rem;
                    z-index: 0;
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
        #cross {
            display: block;
            position: absolute;
            right: 3%;
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

const Navbar = () => {

    const user = localStorage.getItem('users');
    const navigate = useNavigate();
    const cartcount = useSelector((state) => state.cart.items.length);

    const logout = () => {
        localStorage.clear('users');
        toast.success("Logout Successfult");
        // navigate('/Home');
        console.log("logout", user);
    }

    const openmenu = () => {
        document.getElementById('menuopen').style.display = 'flex';
        document.getElementById('menuopen').style.width = '100%';
    }

    const menuclose = () => {
        document.getElementById('menuopen').style.display = 'none';
        document.getElementById('menuopen').style.width = '0';
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
                        <NavLink to="/about">About</NavLink>
                        {user ? (
                            <NavLink onClick={logout}>LogOut</NavLink>
                        ) : (
                            <NavLink to="/Login">Login</NavLink>
                        )}
                        <RxCross2 size={"1.9rem"} color={'black'} id='cross' onClick={menuclose} />
                    </ul>
                </div>
                <div>
                    <div>
                        <NavLink to='/Cart'>{<PiShoppingCartLight size={"1.7rem"} color={"#383838"} />}</NavLink>
                        {cartcount >= 0 && (
                            <span className="badge badge-danger">{cartcount}</span>
                        )}
                    </div>
                    {user ? (
                        <NavLink onClick={logout} id='logout'>LogOut</NavLink>
                    ) : (
                        <NavLink to="/Login" >Login</NavLink>
                    )}
                    <Styledbars>{<FaBars size={"1.7rem"} onClick={openmenu} />}</Styledbars>
                </div>
            </Stylednavbar>
        </>
    )
}

export default Navbar;