import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Recipes from './components/Recipes';

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/recipes" exact element={<Recipes />} />
            <Route path="/sign-up" exact element={<SignUp />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
