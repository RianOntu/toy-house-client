import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleToyDetails.css'

const SingleToyDetails = () => {
    const SingleToyDetails=useLoaderData();
    const {name,picture,price,rating}=SingleToyDetails;
    return (
        <div className='container'>
            <h1 className='text-center'>Toy Details</h1>
           <div className="row mt-5 mb-5">
           <div className="col-md-6 col-12">
                <img className='picture' src={picture} alt="" />
            </div>
            <div className="col-md-6 col-12">
                <h1>Name : {name}</h1>
                <p>Price : {price}</p>
                <p>Rating : {rating}</p>
            </div>
           </div>
            
        </div>
    );
};

export default SingleToyDetails;