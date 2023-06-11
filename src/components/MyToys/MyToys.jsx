import React, { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const MyToys = () => {
    const notify = () => toast("Toy Deleted!");
    const [myToys,setMyToys]=useState([]);
    const [status,setStatus]=useState('');
    const {user}=useContext(AuthenticationContext);
    console.log(user);
   
   
    const url = `http://localhost:5000/mytoys?username=${user?.displayName}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[])
    const handleAscending = () => {
        fetch(`${url}&status=asc`)
          .then(res => res.json())
          .then(data => setMyToys(data));
      };
      
      const handleDescending = () => {
        fetch(`${url}&status=desc`)
          .then(res => res.json())
          .then(data => setMyToys(data));
      };

const handleDelete=id=>{
    const proceed = confirm('Are You sure you want to delete?');
    if (proceed) {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    notify();
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining);
                }
            })
    }
}
       
    
    return (
        <div className='container mt-5 mb-5'>
            <Helmet>
        <title>Toy House | My Toys</title>
      </Helmet>
            <ToastContainer/>
        <h1 className='mt-5 mb-5 text-center'>My Toys</h1>
        {
            myToys.length>0?<div className="d-flex justify-content-end">
            <button className='btn btn-danger mr-2' onClick={handleAscending}>Sort Ascending by price</button>
            <button className='btn btn-danger' onClick={handleDescending}>Sort Descending by price</button>
            </div>:""
        }
    {
        myToys.length===0?<p className='text-center text-danger'>No toy yet.Please <Link to='/addatoy'>add a toy.</Link> </p> : 
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
  myToys.map(toy=> <tr>
      <td><img className='toyimg' src={toy.purloftoy} alt="" /></td>
      <td>{toy.sellername}</td>
      <td>{toy.nameoftoy}</td>
      <td>{toy.subcategory}</td>
      <td>{toy.price}</td>
      <td>{toy.avquantity}</td>
      <td><Link className='mr-2' to={`update/${toy._id}`}><button className='btn btn-warning'>Update</button></Link>
      <Link onClick={()=>handleDelete(toy._id)}><button className='btn btn-danger'>Delete</button></Link>
      </td>
    </tr>)
}


</tbody>
</table>
    }
    </div>
    );
};

export default MyToys;