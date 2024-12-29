import PropTypes from "prop-types";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      {cart.map((bottle, id) => (
        <div
          style={{ margin: "1rem", display: "flex", justifyContent: "center" }}
          key={id}
        >
          <img
            style={{ width: "80px", marginRight: "0.7rem" }}
            src={bottle.img}
            alt=""
          />
          <button onClick={() => handleRemoveFromCart(bottle.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
