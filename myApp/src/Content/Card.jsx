import './Cards.css';
import PropTypes from 'prop-types';

function Card({ image, description, price }) {
  const handleAddToCart = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: image,
          description,
          price,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Added to cart!");
      } else {
        alert("❌ Failed to add: " + data.error);
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ Error adding to cart.");
    }
  };

  return (
    <div className="card">
      <img src={image} alt="Product" />
      <p>{description}</p>
      <h3>₹{price}</h3>
      <button onClick={handleAddToCart} className='add-to-cart'>Add to Cart</button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
