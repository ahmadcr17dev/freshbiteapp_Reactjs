import React from "react";
import { PiChatsTeardropDuotone } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlWallet } from "react-icons/sl";
import styled from "styled-components";

const Styledsection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5rem 0rem 1rem 0rem;
    font-family: "poppins", sans-serif;
    text-align: center;
    h4 {
        font-size: 1.2rem;
        margin-top: 1rem;
    }
    p {
        font-size: 0.8rem;
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        h4 {
            font-size: 0.9rem;
        }
        p {
            font-size: 0.7rem;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        h4 {
            font-size: 0.77rem;
        }
        p {
            font-size: 0.55rem;
        }
    }
`;

const MidIcons = () => {
    return (
        <>
            <Styledsection>
                <div>
                    <PiChatsTeardropDuotone size={"2rem"} color={"tomato"} />
                    <h4>Top Notch Support</h4>
                    <p>Chat with us if you've any query</p>
                </div>
                <div>
                    <LuHeartHandshake size={"2rem"} color={"tomato"} />
                    <h4>100% Satisfaction Guarrentae</h4>
                    <p>Provide help in case of Dissatisfaction</p>
                </div>
                <div>
                    <MdOutlineLocalShipping size={"2rem"} color={"tomato"} />
                    <h4>Free Deliverey Acrross all US</h4>
                    <p>Free Deliverey for all orders above $500</p>
                </div>
                <div>
                    <SlWallet size={"2rem"} color={"tomato"} />
                    <h4>Secure Payment</h4>
                    <p>We use safest Payment Technologies</p>
                </div>
            </Styledsection>
        </>
    );
}

export default MidIcons;