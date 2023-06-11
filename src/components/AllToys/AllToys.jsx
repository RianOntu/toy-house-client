import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './AllToys.css';
import { Helmet } from 'react-helmet';

const AllToys = () => {
    const alltoys=useLoaderData();
    const [toys,setToys]=useState(alltoys);
    const handleSearch=event=>{
        event.preventDefault();
        const form=event.target;
        const searchText=form.search.value;
        const url = `https://toy-house-server-rianontu.vercel.app/toysbysearch?toyName=${searchText}`;
       
            fetch(url)
                .then(res => res.json())
                .then(data => setToys(data))
      

    }
    return (
        <div className='container mt-5 mb-5'>
           <Helmet>
        <title>Toy House | All Toys</title>
      </Helmet>
            <h1 className='mt-5 mb-5 text-center'>All Toys</h1>
            <form className='d-flex align-items-center justify-content-center' onSubmit={handleSearch}>
            <input className='search mt-5 mb-5' type="text" name="search" id="" placeholder='Search toys using toy name'/>
            <input className='btn btn-danger ml-2 searchbtn' type="submit" value="Search" />
            </form>
            
            <table class="table">
  <thead>
    <tr>
    <th scope="col">Toy Picture</th>
      <th scope="col">Seller Name</th>
      <th scope="col">Toy Name</th>
      <th scope="col">Sub-Category</th>
      <th scope="col">Price</th>
      <th scope="col">Available Quantity</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        toys.map(toy=> <tr>
            <td><img className='toyimg' src={toy.purloftoy} alt="" /></td>
            <td>{toy.sellername}</td>
            <td>{toy.nameoftoy}</td>
            <td>{toy.subcategory}</td>
            <td>{toy.price}</td>
            <td>{toy.avquantity}</td>
            <td><Link to={`toy-details/${toy._id}`}><button className='btn btn-danger'>View Details</button></Link></td>
          </tr>)
    }
   
  
  </tbody>
</table>
        </div>
    );
};

export default AllToys;