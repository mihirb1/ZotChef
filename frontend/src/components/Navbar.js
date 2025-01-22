import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  //if window resize is too small, do not show sign up button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // useEffect will manage error where sign up button reappers on refresh
  // empty array means to run useEffect once (when it renders)
  // useEffect is also checked when button is changed (during resizing)
  useEffect(() => {
    showButton();
  }, []);
  // checks if user resizes window, then calls showButton function
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ZotChef &nbsp;
            <i class='fas fa-hamburger' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Receipts
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recipes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Recipes
              </Link>
            </li>

            <li>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="nav-links-mobile" onClick={closeMobileMenu}>
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </li>
          </ul>
          
          <div className="nav-buttons">
            <SignedOut>
              {button && (
                <SignInButton mode="modal">
                  <button className="btn--outline">SIGN IN</button>
                </SignInButton>
              )}
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;