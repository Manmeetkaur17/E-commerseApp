import { useEffect, useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart data
  const fetchCartItems = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/cart'); // adjust URL as needed
      const data = await res.json();
      setCartItems(data);
    } catch (err) {
      console.error('Error fetching cart items:', err);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleQuantityChange = async (itemId, delta) => {
    const item = cartItems.find(i => i._id === itemId);
    if (!item) return;

    const updatedQuantity = (item.quantity || 1) + delta;
    if (updatedQuantity < 1) return;

    try {
      await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: updatedQuantity }),
      });
      fetchCartItems();
    } catch (err) {
      console.error('Error updating quantity:', err);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: 'DELETE',
      });
      fetchCartItems();
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <div className="orders-list">
            {cartItems.map((item) => (
              <div className="order-card" key={item._id}>
                <img src={item.imageUrl} alt={item.description} />
                <h3>{item.description}</h3>
                <p>₹{item.price}</p>
                <div>
                  Quantity:
                  <button onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    readOnly
                  />
                  <button onClick={() => handleQuantityChange(item._id, +1)}>+</button>
                </div>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            ))}
          </div>

          <div className="bill-section">
            <h3>🧾 Bill Summary</h3>
            <table className="bill-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.description}</td>
                    <td>{item.price * (item.quantity || 1)}</td>
                  </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>₹{getTotal()}</strong></td>
                </tr>
              </tfoot>
            </table>

            <button className="proceed-btn">Proceed to Checkout</button>
          </div>

          
        </>
      )}
    </div>
  );
};

export default Orders;
