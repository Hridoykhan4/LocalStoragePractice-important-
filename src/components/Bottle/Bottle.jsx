import PropTypes from 'prop-types'

const Bottle = ({bottle}) => {
    const {name, price, img} = bottle
    return (
        <div style={{
            border: '2px solid tomato',
            padding: '1rem',
            borderRadius: '1rem'
        }}>
            <img style={{width: '200px'}} src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>

        </div>
    );
};



export default Bottle;
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired
}   