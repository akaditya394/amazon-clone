import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";
import ThankYou from "./Pages/ThankYou";
import CartProvider from '../src/store/CartProvider';

const App = () => {
  return (
    <CartProvider>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/thankyou" element={<ThankYou />}/>
    </Routes>
    </CartProvider>
  )
}

export default App