import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import {
  addToLS,
  getCartStoredItem,
  removeFromLS,
} from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // Load Data

  useEffect(() => {
    if (bottles.length) {
      const storedItem = getCartStoredItem();

      const savedItems = [];
      for (const id of storedItem) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        savedItems.push(bottle);
      }
      setCart(savedItems);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newBottle = bottle;
    setCart([...cart, newBottle]);
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remainingCard = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCard);
    removeFromLS(id);
  };

  return (
    <div>
      <h3>Total Bottles: {bottles.length}</h3>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
