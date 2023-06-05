import React from 'react';
import logo from '../../../assets/car1.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
        <img src={logo} alt="" />
        <div className="container">
            <div className='description'>
            <h1 className='text-white'>Discover endless joy and playfulness at <br /> our magical toy wonderland!</h1>
        <button className='btn btn-danger'>Discover</button>
            </div>
    
        </div>
            
        </div>
    );
};

export default Banner;