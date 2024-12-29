import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
        const newBottle = bottle;
        setCart([...cart, newBottle]);
        
  }

  return (
    <div>
      <h3>Total Bottles: {bottles.length}</h3>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem'}}>
      {bottles.map((bottle) => (
        <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>
      ))}
      </div>
    </div>
  );
};

export default Bottles;
