import './App.css';

import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Navbar from './Component/Navbar.js';
import Menu from './Component/Menu.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={ <Navbar/> } /> */}
          <Route path="/menu" element={ <Menu/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
