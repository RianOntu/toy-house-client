import React from 'react';
import logo from '../../assets/toy5.webp';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg">
      <div className="container">
      <Link to='/' class="navbar-brand text-white">
        <div className='logo d-flex align-items-center'>
        <img src={logo} alt="" />
            <h3>Toy House</h3>
            

        </div></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/blog'>Blog</Link>
            </li>
           
           
          </ul>
          
        </div>
      </div>
      </nav>
    );
};

export default Header;