const getCartStoredItem = () => {
  const storedItem = localStorage.getItem("cart");
  return storedItem ? JSON.parse(storedItem) : [];
};

const saveToLS = (cart) => {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const addToLS = (id) => {
  const cart = getCartStoredItem();
  cart.push(id);
  saveToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getCartStoredItem();
  const remaining = cart.filter((idx) => idx !== id);
  saveToLS(remaining);
};

export { addToLS, getCartStoredItem, removeFromLS };
