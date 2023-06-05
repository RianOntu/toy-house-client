import React from 'react';
import logo from '../../assets/toy1.png';


const Footer = () => {
    return (
        <div className='foot'>
               <div className='container'>
            <div className="row">
                <div className="col-md-4 col-12">
                <div className='logo d-flex align-items-center'>
              <img src={logo} alt="" />
               <h3>Toy House</h3>
            

        </div>
                </div>
                <div className="col-md-4 col-12"></div>
                <div className="col-md-4 col-12"></div>
            </div>
            
        </div>
        </div>
     
    );
};

export default Footer;