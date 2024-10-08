import React from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import { PiShoppingCartLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

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
        margin: 1.9rem 1.5rem 0rem 0rem;
        #wishlist {
            padding: 0px 5px 0px 5px;
            margin-top: 8px;
            span {
                position: absolute;
                top: 2.7rem;
                right: 6.3rem;
                font-size: 10px;
                border-radius: 100%;
                background-color: red;
            }
        }
        #cart {
            padding: 0px 5px 0px 5px;
            margin-top: 8px;
            span {
                position: absolute;
                top: 2.7rem;
                right: 4.19rem;
                font-size: 10px;
                border-radius: 100%;
                background-color: red;
            }
        }
    }
    #login {
        padding: 0px 5px 0px 5px;
        margin-top: 8px;
    }
    #logout {
        padding: 0px 5px 0px 5px;
        margin-top: 8px;
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
            width: 100%;
            height: 100vh;
            background-color: white;
            text-align: center;
            padding-top: 1rem;
            z-index: 1000;
            transition: left 0.5s ease-in-out;
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
            #wishlist {
                margin: 1rem 0rem 0rem 0rem;
                span {
                    position: absolute;
                    top: 3.8rem;
                    right: 8.0rem;
                    z-index: 0;
                }
            }
            #cart {
                margin: 1rem 0rem 0rem 0rem;
                span {
                    position: absolute;
                    top: 3.8rem;
                    right: 5.7rem;
                    z-index: 0;
                }
            }
            #login {
                padding: 0px 5px 0px 5px;
                margin: 1rem 1rem 0rem 0rem;
            }
            #logout {
                padding: 0px 5px 0px 5px;
                margin: 1rem 1rem 0rem 0rem;
            }
        }
        #cross {
            display: block;
            position: absolute;
            right: 3%;
        }
        #bars {
            margin: 1rem -1rem 0rem 0rem;
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
    const wishcount = useSelector((state) => state.wishlist.items.length);

    // it will logout the user 
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
                        {/* if user exist then logout button will be shown otherwise login button will be shown */}
                        {user ? (
                            <NavLink onClick={logout} id='logout'><CiLogout size={"1.5rem"} color={'#383838'} /></NavLink>
                        ) : (
                            <NavLink to="/Login" id='login'><CiLogin size={"1.5rem"} color={'#383838'} /></NavLink>
                        )}
                        <RxCross2 size={"1.9rem"} color={'black'} id='cross' onClick={menuclose} />
                    </ul>
                </div>
                <div>
                    <div id='wishlist'>
                        <NavLink to='/wishlist'>{<CiHeart size={"1.5rem"} color={"#383838"} />}</NavLink>
                        {/* wishlist icon count will be updated */}
                        {wishcount >= 0 && (
                            <span className="badge badge-danger">{wishcount}</span>
                        )}
                    </div>
                    <div id='cart'>
                        <NavLink to='/Cart'>{<PiShoppingCartLight size={"1.5rem"} color={"#383838"} />}</NavLink>
                        {/* cart icon count will be updated */}
                        {cartcount >= 0 && (
                            <span className="badge badge-danger">{cartcount}</span>
                        )}
                    </div>
                    {user ? (
                        <NavLink onClick={logout} id='logout'><CiLogout size={"1.5rem"} color={'#383838'} /></NavLink>
                    ) : (
                        <NavLink to="/Login" id='login'><CiLogin size={"1.5rem"} color={'#383838'} /></NavLink>
                    )}
                    <Styledbars>{<FaBars id='bars' size={"1.5rem"} onClick={openmenu} />}</Styledbars>
                </div>
            </Stylednavbar>
        </>
    )
}

export default Navbar;