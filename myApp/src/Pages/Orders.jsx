import { useEffect, useState } from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("cart")) || [];
    setOrders(savedOrders);
  }, []);

  // Save updated orders to localStorage
  const updateLocalStorage = (updatedOrders) => {
    localStorage.setItem("cart", JSON.stringify(updatedOrders));
  };

  // Remove an item
  const handleCancel = (indexToRemove) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
    setOrders(updatedOrders);
    updateLocalStorage(updatedOrders);
  };

  // Change quantity
  const handleQuantityChange = (indexToUpdate, newQty) => {
    if (newQty < 1) return;
    const updatedOrders = orders.map((item, index) =>
      index === indexToUpdate ? { ...item, quantity: newQty } : item
    );
    setOrders(updatedOrders);
    updateLocalStorage(updatedOrders);
  };

  // Calculate total
  const totalBill = orders.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleProceed = () => {
    alert("Proceeding to shop...");
    navigate("/card-content");
  };

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <div className="orders-list">
            {orders.map((item, index) => (
              <div className="order-card" key={index}>
                <img src={item.image} alt="item" />
                <h4>{item.description}</h4>
                <h3>₹{item.price}</h3>

                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) =>
                      handleQuantityChange(index, Number(e.target.value))
                    }
                  />
                </label>

                <button onClick={() => handleCancel(index)}>Cancel Item</button>
              </div>
            ))}
          </div>

          <div className="bill">
            <h2>Order Summary</h2>
            <ul>
              {orders.map((item, index) => (
                <li key={index}>
                  {item.description} - ₹{item.price} x{" "}
                  {item.quantity || 1} = ₹
                  {(item.price * (item.quantity || 1)).toFixed(2)}
                </li>
              ))}
            </ul>
          <h2>Total Bill: ₹{totalBill}</h2>
          </div>

          <button className="proceed-btn" onClick={handleProceed}>
            Proceed to Shop
          </button>
        </>
      )}
    </div>
  );
}
