import React from 'react';
import Logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../assets/scss/topnav.scss';


function TopNav() {
  return (
    <div className="top-nav">
      <img src={Logo} height="40"/>
      <div className="menu">
        <div className="menu-item">
          Home
        </div>
        <div className="menu-item">
          Catalog
        </div>
        <div className="menu-item">
          Shop
        </div>
        <div className="menu-item">
          Pages
        </div>
      </div>
      <div className="menu-right">
        <FontAwesomeIcon icon={faSearch} className="list-icon" />
        <FontAwesomeIcon icon={faCartPlus} className="list-icon" />
      </div>
        <div className="badge">12</div>
    </div>
  )
}

export default TopNav;