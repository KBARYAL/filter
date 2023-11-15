import React from 'react'
import './App.css';
import NAVBAR from './Navbar/navbar';
import Home from './Home/home';
import CART from './GoToCart/cart';
import {BrowserRouter  as Router,  Routes,  Route} from "react-router-dom" 
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [heading, setHeading] = useState("")
  const [Sending,setSending] = useState([])
  console.log(Sending)
  
  return (
    <div className="App">
     <Router>
      <NAVBAR name={heading.item} price={heading.price} setSending={setSending}/>
          <Routes>
             <Route path="/" element={<Home setHeading={setHeading}/>}/>
             <Route path="/CART" element={<CART Sending={Sending}/>}/>
          </Routes>    
    </Router>
     
  
    </div>
  );
}

export default App;
