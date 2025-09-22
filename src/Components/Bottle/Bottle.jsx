import React from 'react';
import './Bottle.css'
const Bottle = ({ bottle, handleCart }) => {
    //console.log(bottle);
    const { img, name, price, stock } = bottle
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h1>Name:{name}</h1>
            <p>Price:${price}</p>
            <h1>Avaiable:{stock}</h1>
            <button onClick={() => handleCart(bottle)}>Buy now</button>
        </div>
    );
};

export default Bottle;