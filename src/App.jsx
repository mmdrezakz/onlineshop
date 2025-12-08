import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Header from "./Components/Header"
import MenShop from "./Pages/MenShop"
import WomenShop from "./Pages/WomenShop"
import ElectronicShop from "./Pages/ElectronicShop"
import ProductDetail from "./Pages/ProductDetail"
import { CartProvider } from "./utils/CartContext"


function App() {


  return (
    <CartProvider>

    <BrowserRouter>
    
      <Header />
        <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id"  element={<ProductDetail />}/>
        <Route path="/shop/men" element={<MenShop />} />
        <Route path="/shop/women" element={<WomenShop />} />
        <Route path="/shop/electronic" element={<ElectronicShop />} />

        <Route path="/cart" element={<Cart />} />


      </Routes>
        </div>
    
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
