import PropTypes from "prop-types";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, price, img } = bottle;
  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      <img style={{ width: "200px" }} src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
