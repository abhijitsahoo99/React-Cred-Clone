import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  }
  return (
    <div className='mobile-menu-wrapper'>
    <div className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}>
      <div className='mobile-navbar'>
        <div className='mobile-navItem'>credit score check</div>
        <div className='mobile-navItem'>CRED pay</div>
      </div>
    </div>
        <div className='flex max-width header'>
            <img 
                src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
                className="header-logo" alt='CRED Logo'/>
        <div className='only-mobile mobile-menu-button-wrapper' >
          <button class= {`hamburger hamburger--spin ${showMobMenu ? "is-active" : ""}`} type="button" onClick={toggleMobileMenu}>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
          </button>  
        </div>
        <div className='non-mobile flex'>
            <div className='header-navItem'>credit score check</div>
            <div className='header-navItem'>CRED pay</div>
        </div>
        </div>
        
      
    </div>

  )
}

export default Header;