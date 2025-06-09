import { useParams } from 'react-router-dom';
import Card from "./Content/Card"; 
import "./Content/Cards.css";
const productData = {
  electronics: [
    { description: 'Echo Dot Smart Speaker', price: 3499, image: 'https://m.media-amazon.com/images/I/71i41U9D4PL._SX679_.jpg' },
    { description: 'Canon DSLR Camera', price: 28999, image: 'https://m.media-amazon.com/images/I/914hFeTU2-L._SX679_.jpg' },
  ],
  appliances: [
    { description: 'Samsung 55" Smart TV', price: 44999, image: 'https://m.media-amazon.com/images/I/71t9LvhgptL._SX679_.jpg' },
    { description: 'IFB Washing Machine', price: 18999, image: 'https://m.media-amazon.com/images/I/71vfnBuzQlL._SX679_.jpg' },
  ],
  gadgets: [
    { description: 'Smart Fitness Band', price: 449, image: 'https://m.media-amazon.com/images/I/514CfZOJ5rL._SX300_SY300_QL70_FMwebp_.jpg' },
    { description: 'Bluetooth Earbuds', price: 599, image: 'https://m.media-amazon.com/images/I/71tcxRiM76L._AC_SY200_.jpg' },
  ]
};

export default function ProductCategoryPage() {
  const { category } = useParams();
  const items = productData[category];

  if (!items) {
    return <h2 style={{ textAlign: 'center' }}>Category &quot;{category}&quot; not found</h2>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="container">
        {items.map((item, index) => (
          <Card
            key={index}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
