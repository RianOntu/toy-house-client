import React from 'react';
import { Link } from 'react-router-dom';
import './SingleToy.css'

const SingleToy = ({toy}) => {
    const {id,name,picture,price,rating}=toy;
    return (
        <div class="card">
  <img class="card-img-top" src={picture} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Name:{name}</h5>
    <p class="card-text">Price:{price}</p>
    <p class="card-text">Rating:{rating}</p>
    <Link className='button' to={`toydetails/${id}`}><a  class="btn btn-primary text-white">View Details</a></Link>
  </div>
</div>
    );
};

export default SingleToy;