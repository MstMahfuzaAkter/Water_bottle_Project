import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { aC, gC, removeFromLocalStorage } from '../../Utilities/localstorage';
import Cart from '../Cart/Cart';
const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])
    const bottles = use(bottlesPromise)
    //console.log(bottles);


    useEffect(() => {
        const storeCartIds = gC()
        //console.log(storeCartIds, bottles);
        const storeCart = []
        for (const id of storeCartIds) {
            //console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if (cartBottle) {
                storeCart.push(cartBottle)
            }

        }
        console.log(storeCart);
        setCart(storeCart)

    }, [bottles])


    const handdleRemoveFromCart = id => {
        console.log('remove item from the cart', id);
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromLocalStorage(id)

    }
    const handleCart = (bottle) => {
        //console.log('ok',bottle);
        const newCart = [...cart, bottle]
        setCart(newCart)
        //save the bottle id in the storage
        aC(bottle.id)

    }
    return (
        <div >
            <h3>Bottles:{bottles.length}</h3>
            <p>Add a cart:{cart.length}</p>
            <Cart cart={cart}
                handdleRemoveFromCart={handdleRemoveFromCart}></Cart>
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