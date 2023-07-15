import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
 import "./index.css";


import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Services from "./Services"
import Navbar from "./Navbar"
import {Routes,Route} from "react-router-dom";
//import Footer from './Footer';
const App=()=>{
    return (
        <>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/contact" Component={Contact}/>
          <Route exact path="/services" Component={Services}/>
         
        </Routes>
       
       
      
      
        </>
    );
};
export default App;
