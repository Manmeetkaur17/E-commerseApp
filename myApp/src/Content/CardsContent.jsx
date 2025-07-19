import { useEffect, useState } from "react";
import Card from './Card';
import './Cards.css';
import Navbar from '../Navbar';

function CardsContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Best Selling Electronics</h1>
      <div className="container">
        {products.map((item, index) => (
          <Card
            key={index}
            image={item.imageUrl}
            description={item.name}
            price={item.price}
            
          />
        ))}
      </div>
      <div className="footer">
        <h4>@Manmeet kaur</h4>
      </div>
    </>
  );
}

export default CardsContent;
