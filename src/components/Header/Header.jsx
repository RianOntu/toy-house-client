import React, { useContext } from 'react';
import logo from '../../assets/toy5.webp';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';

const Header = () => {
  const {user,logOut}=useContext(AuthenticationContext);
  const navigate = useNavigate()
  const from ='/login'
  const handleLogout=()=>{
    logOut().then(()=>navigate(from, { replace: true })).catch(error=>console.log(error))
  }
 
    return (
        <nav class="navbar navbar-expand-lg bg navbar-dark ">
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
          <ul class="navbar-nav ml-auto d-flex align-items-center">
            <li class="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/blog'>Blog</Link>
            </li>
            <li class="nav-item">
              <Link to='/alltoys'>All Toys</Link>
            </li>
            {
              user?<> <li class="nav-item">
              <Link to='/addatoy'>Add A Toy</Link>
            </li>
           
            <li class="nav-item">
              <Link to='/mytoys'>My Toys</Link>
            </li>
           
           
            <li class="nav-item" onClick={handleLogout}>
              <Link to='/logout'>Log Out</Link>
            </li>
            <li class="nav-item">
              <img data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} className='ppic' src={user.photoURL} alt="" />
            </li>
            </>
            : <li class="nav-item">
            <Link to='/login'>Login</Link>
          </li>
            }
           
           
           
           
           
           
          </ul>
          
        </div>
      </div>
      </nav>
    );
};

export default Header;