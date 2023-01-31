import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import Property from "./pages/Property";
import WishList from "./pages/WishList";
import MockFom from "./pages/MockFom";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/PropertyList" element={<Properties/>} />
          <Route path="/Property" element={<Property/>} />
          <Route path="/Wishlist" element={<WishList/>} />
          <Route path="/mockform" element={<MockFom/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;