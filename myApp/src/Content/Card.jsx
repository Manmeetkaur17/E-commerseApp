import PropTypes from "prop-types";
import "./Cards.css";


export default function Card({description, price,image}) {
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = { description, price, image };
    cartItems.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  
    alert("Item added to cart!");
  };
  
    return (
      
     <div className='card'>
      
      <img src={image} alt="Product" />
      <h4>{description}</h4>
      <h2>Price: ₹{price}</h2>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart 🛒</button>
      
     </div>
    )
  };

  Card.propTypes = {
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,

  };


