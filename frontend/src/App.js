import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Recipes from './components/Recipes';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path="/" exact element={<Home />} />
          {/* Protected Route for Services */}
          <Route
            path="/services"
            exact
            element={
              <>
                <SignedIn>
                  <Services />
                </SignedIn>
                <SignedOut>
                  <div className="error-message">
                    <h1>Error: Must Be Signed In</h1>
                  </div>
                </SignedOut>
              </>
            }
          />
          
          {/* Protected Route for Recipes */}
          <Route
            path="/recipes"
            exact
            element={
              <>
                <SignedIn>
                  <Recipes />
                </SignedIn>
                <SignedOut>
                  <div className="error-message">
                    <h1>Error: Must Be Signed In</h1>
                  </div>
                </SignedOut>
              </>
            }
          />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
