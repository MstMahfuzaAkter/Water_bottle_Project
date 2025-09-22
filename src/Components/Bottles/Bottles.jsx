import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])
    const bottles = use(bottlesPromise)
    //console.log(bottles);
    const handleCart = (bottle) => {
           //console.log('ok',bottle);
           const newCart=[...cart,bottle]
           setCart(newCart)
           
    }
    return (
        <div >
            <h3>Bottles:{bottles.length}</h3>
            <p>Add a cart:{cart.length}</p>
            <img src={cart.img} alt="" />
            <div className='bottles-container bottle'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        handleCart={handleCart}
                        bottle={bottle} ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;