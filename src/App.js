import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  )
}

export default App