import PropTypes from 'prop-types'
const Cart = ({cart}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;