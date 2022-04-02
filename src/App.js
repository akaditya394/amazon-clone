import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Auth from "./Pages/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth />}/>
    </Routes>
  )
}

export default App