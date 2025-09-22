const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return []
}
const saveToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    //cart.push(id)
    const newcart = [...cart, id];
    saveToLocalStorage(newcart)
}