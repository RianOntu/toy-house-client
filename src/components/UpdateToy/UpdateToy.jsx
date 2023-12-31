import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../../assets/bg1.jpg';

const UpdateToy = () => {
    const notify = () => toast("Toy Updated!");
    const singleToy=useLoaderData();
    const {user}=useContext(AuthenticationContext);
const {_id,nameoftoy,purloftoy,subcategory,price,rating,avquantity,details}=singleToy;

const navigate = useNavigate();
const from = '/mytoys';

const handleUpdateToy = (id,event) => {
    event.preventDefault();
    const form=event.target;
    const nameoftoy=form.nameoftoy.value;
    const purloftoy=form.purloftoy.value;
    const subcategory=form.subcategory.value;
    const price=form.price.value;
    const rating=form.rating.value;
    const avquantity=form.avquantity.value;
    const details=form.details.value;
    const sellername=form.sellername.value;
    const selleremail=form.selleremail.value;

    const updatedToy={
        nameoftoy:nameoftoy,purloftoy:purloftoy,subcategory:subcategory,price:price,rating:rating,avquantity:avquantity,details:details,sellername:sellername,selleremail:selleremail
    }
    fetch(`https://toy-house-server-rianontu.vercel.app/update/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                form.reset();
                notify()
               navigate(from,{replace:true})
            }
        })
}
      
     

    return (
   <div className="addatoy">
    <ToastContainer />   
    <img className='bgimage' src={bg} alt="" />
         <div className='container'>
                 
    <form className='w-25 addatoyform' onSubmit={(event)=>handleUpdateToy(_id,event)}>
    <h1 className='text-center'>Update</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Name of the toy</label>
    <input type="text" name='nameoftoy' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of the toy" defaultValue={nameoftoy} required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Picture URL of the toy</label>
    <input type="text" name='purloftoy' defaultValue={purloftoy} class="form-control" id="exampleInputPassword1" placeholder="Picture URL of the toy" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Seller Name</label>
    <input type="text" name='sellername' defaultValue={user?.displayName} class="form-control" id="exampleInputPassword1" placeholder="Seller Name" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Seller Email</label>
    <input type="text" name='selleremail' defaultValue={user?.email} class="form-control" id="exampleInputPassword1" placeholder="Seller Email" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Sub-category</label>
    <input type="text" name='subcategory' defaultValue={subcategory} class="form-control" id="exampleInputPassword1" placeholder="Sub-category" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="text" name='price' defaultValue={price} class="form-control" id="exampleInputPassword1" placeholder="Price" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Rating</label>
    <input type="text" name='rating' defaultValue={rating} class="form-control" id="exampleInputPassword1" placeholder="Rating" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Available Quantity</label>
    <input type="text" name='avquantity' defaultValue={avquantity} class="form-control" id="exampleInputPassword1" placeholder="Available Quantity" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Detail Description</label>
    <textarea name='details' defaultValue={details} class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-danger">Update</button>
</form>
        </div>
   </div>
    );
};

export default UpdateToy;