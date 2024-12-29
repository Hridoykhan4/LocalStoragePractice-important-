const getCartStoredItem = () => {
    const storedItem = localStorage.getItem('cart');
    return storedItem ? JSON.parse(storedItem) : [];
}

const saveToLS = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString)
}

const addToLS = id => {
    const cart = getCartStoredItem();
    cart.push(id);
    saveToLS(cart)
}

const {addToLS, getCartStoredItem};