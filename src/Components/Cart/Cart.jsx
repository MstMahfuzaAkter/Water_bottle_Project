import React from 'react';
import './Cart.css'
const Cart = ({ cart,handdleRemoveFromCart }) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img}></img>
                    <button onClick={()=>handdleRemoveFromCart(bottle.id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;