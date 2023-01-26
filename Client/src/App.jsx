import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import success from "./pages/success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/login" element={user?<Navigate to="/"/>:<Login />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/register" element={<success />}/>




      </Routes>
    </Router>
  );
}

export default App;
