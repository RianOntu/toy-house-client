import React, { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const [myToys,setMyToys]=useState([])
    const {user}=useContext(AuthenticationContext);
    console.log(user);
    const url = `http://localhost:5000/mytoys?username=${user.displayName}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[])
       
    
    return (
        <div className='container mt-5 mb-5'>
        <h1 className='mt-5 mb-5 text-center'>My Toys</h1>
     
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
        <Link to={`delete/${toy._id}`}><button className='btn btn-danger'>Delete</button></Link>
        </td>
      </tr>)
}


</tbody>
</table>
    </div>
    );
};

export default MyToys;