import React from 'react';
import logo from '../../assets/toy5.webp';
import './Footer.css'


const Footer = () => {
    return (
        <div className='foot'>
               <div className='container'>
            <div className="row">
                <div className="col-md-4 col-12 d-flex align-items-center">
                <div className='logo d-flex align-items-center text-white footer'>
              <img src={logo} alt="" />
               <h3>Toy House</h3>
            

        </div>
                </div>
                <div className="col-md-4 col-12 d-flex text-white align-items-center">
                &copy; Rian Ontu all rights reserved
                </div>
                <div className="col-md-4 col-12 text-white ">
                    <p>Phone:121212 <br /> California,United States</p>
                    <div className="d-flex">
                    <i class="fa-brands fa-facebook mr-3"></i>
                    <i class="fa-brands fa-instagram mr-3"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>

                </div>
            </div>
            
        </div>
        </div>
     
    );
};

export default Footer;