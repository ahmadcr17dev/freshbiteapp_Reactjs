// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletefromcart } from '../redux/CartSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const cartitems = useSelector(state => state.cart.items);

    const handleRemove = (name) => {
        dispatch(deletefromcart(name));
    };

    return (
        <div>
            <h1>Cart Page</h1>
            <div>
                {cartitems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartitems.map((item) => (
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                                <button onClick={() => handleRemove(item)}>Remove</button>
                            </div>
                        ))}
                        {/* <button onClick={handleClearCart}>Clear Cart</button> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
