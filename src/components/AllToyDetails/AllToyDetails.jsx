import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './AllToyDetails.css';

const AllToyDetails = () => {
    const toyDetails=useLoaderData();
    console.log(toyDetails);
    const {avquantity,details,nameoftoy,price,purloftoy,rating,sellername,selleremail,subcategory}=toyDetails;
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center mt-5 mb-5'>Toy Details</h1>
            <div className="row">
               <div className="col-md-6">
                <img className='toyimage' src={purloftoy} alt="" />
               </div>
               <div className="col-md-6">
                <h3>Name of toy : {nameoftoy}</h3>
                <p>Available quantity : {avquantity}</p>
                <p>Sub-category : {subcategory}</p>
                <p>Price : {price}</p>
                <p>Rating : {rating}</p>
                <p>Seller name : {sellername}</p>
                <p>Seller email : {selleremail}</p>
                <p>Deatils : {details}</p>
               </div>
            </div>
            
        </div>
    );
};

export default AllToyDetails;