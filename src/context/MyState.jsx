import React from "react";
import MyContext from "./MyContext";

const MyState = (props) => {
    const state = {
        name: "Ahmad",
        class: "BSCS-VI",
    }
    return (
        <MyContext.Provider value={state}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;