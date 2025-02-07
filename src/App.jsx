import React from "react";
import "./App.css"
import { Link, Route,  Routes } from "react-router-dom";
import Activities from "./pages/activities/Activities";
import Hotel from "./pages/Hotels/Hotel";
import Restoranlar from "./pages/Restaurants/Restoranlar";
import Home from "./pages/Home/Home";


const App = () => {


  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hotel" element={<Hotel />} />
    <Route path="/restoranlar" element={<Restoranlar />} />
    <Route path="/activities" element={<Activities  />} />
   </Routes>


   
   </>
  );
}

export default App