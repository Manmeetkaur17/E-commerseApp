import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Card from './Content/Card';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './EnteryPages/Login';
import Orders from './Pages/Orders';
import Signup from './EnteryPages/Signup';
import CardsContent from './Content/CardsContent';
import CategoryPage from './CategoryPage';

// import Home from './Pages/Home';


function App() {
  return (
   <>

<Router>
  <Routes>

{/* Auth routes */}
<Route element={<AuthLayout />}>
  <Route path="/" element={<Login />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Route>

{/* Main layout routes */}
<Route element={<MainLayout />}>
  <Route path="/CardsContent" element={<CardsContent />} />
  <Route path="/Orders" element={<Orders />} />
  <Route path="/products/:category" element={<CategoryPage />} />
 
</Route>

  </Routes>
</Router>   
   </>
  )
}

export default App
