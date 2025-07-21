# 🛒 E-Commerce App – My Shop

This is a full-stack **E-commerce Web Application** built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. It allows users to browse products, add items to the cart, manage orders, and includes user authentication features like Sign-Up and Login.


## Features

### Authentication
- **Sign Up** – Users can register with name, email, and password.
- **Login** – Authenticated users can log in to access cart and order functionality.
- User credentials are securely stored in MongoDB using encrypted passwords.

### Product Display
- Dynamic product listing from different categories like **Electronics**, **Appliances**, and **Gadgets**.
- Each product card displays an **image**, **description**, **price**, and an **Add to Cart** button.
- Uses **React Router** for category-based routing.

### Cart & Order Management
- When "Add to Cart" is clicked, product data is sent via **POST** to the backend and stored in the `cart` collection in MongoDB.
- The **Orders Page** fetches all cart items from the database using a **GET** request.
- Users can **increase/decrease quantity** or **remove** items from the cart.
- A **bill summary** is generated showing all items and total price.



## 🔧 Tech Stack

| Layer      | Tools/Libraries                  |
|------------|----------------------------------|
| Frontend   | React.js, React Router, CSS      |
| Backend    | Node.js, Express.js              |
| Database   | MongoDB, Mongoose ORM            |



## How It Works

### 1. **Authentication Flow**
- **Sign-Up:** `/signup` – Registers new user.
- **Login:** `/login` – Verifies user and grants access to cart/orders.

### 2. **Product Flow**
- Products are fetched from `GET /api/products`.
- On clicking "Add to Cart", data is posted to `POST /api/cart`.
- Cart items are displayed on `/orders` by fetching `GET /api/cart`.
- Users can:
  - Adjust quantity (`PUT /api/cart/:id`)
  - Delete items (`DELETE /api/cart/:id`)



## What I Learned

- Full-stack app structure (React + Node.js + MongoDB)
- Handling **RESTful APIs** with GET, POST, PUT, DELETE
- Using **React props** and **route parameters** for dynamic rendering
- MongoDB schema modeling with **Mongoose**
- Building a clean and modular project with reusable components



## 🖼️ Screenshots

Login

<img width="652" height="687" alt="image" src="https://github.com/user-attachments/assets/4bf68a95-7751-4219-945a-a9aecbab0a8f" />

Signin

<img width="507" height="339" alt="image" src="https://github.com/user-attachments/assets/4ce1fdd3-b497-44cc-8f1c-4335844e5ced" />

Home

<img width="652" height="314" alt="image" src="https://github.com/user-attachments/assets/660caeeb-030b-4eab-b79a-9a7e5050b156" />

Item added to cart

<img width="652" height="306" alt="image" src="https://github.com/user-attachments/assets/f88a1a8f-b5fe-4840-9349-1898b65dcda4" />

Cart View

<img width="1018" height="460" alt="image" src="https://github.com/user-attachments/assets/0e6b881f-f1d2-4cc9-a3c8-c5a9c8580eda" />

Bill Summary

<img width="1019" height="469" alt="image" src="https://github.com/user-attachments/assets/275a04c7-9976-43f6-a44d-02cf1fff7faf" />


## 📁 Project Structure
E-commerseApp/
│
├── backend/
│ ├── routes/
│ ├── models/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│
└── README.md


**API Routes**
Method	Endpoint	Description
GET	/api/cart	Get all cart items
POST	/api/cart	Add item to cart
PUT	/api/cart/:id	Update item quantity
DELETE	/api/cart/:id	Delete item from cart





📦 Installation
1. Clone the repository
git clone https://github.com/Manmeetkaur/E-commerseApp.git

cd myshop


3. Setup Backend
   
cd backend

npm install

npm start


Ensure your .env file has your MongoDB connection string:

MONGODB_URI=your_mongo_connection
PORT=5000

3. Setup Frontend
cd frontend
npm install
npm run dev





**🙋‍♀️ Author**
Manmeet Kaur

💼 Passionate about solving real-world problems through tech

📬 manmeetkaur7813@gmail.com 
