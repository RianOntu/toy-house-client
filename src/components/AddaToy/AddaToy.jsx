import React, { useContext } from 'react';
import './AddaToy.css';
import bgImage from '../../assets/addatoy.jpg'
import { AuthenticationContext } from '../Providers/AuthenticationProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddaToy = () => {
  const {user}=useContext(AuthenticationContext);
  console.log(user);
  const notify = () => toast("Toy Added!");
  const handleAddtoy=event=>{
    event.preventDefault();
    const form=event.target;
    const nameoftoy=form.nameoftoy.value;
    const purloftoy=form.purloftoy.value;
    const sellername=form.sellername.value;
    const selleremail=form.selleremail.value;
    const subcategory=form.subcategory.value;
    const price=form.price.value;
    const rating=form.rating.value;
    const avquantity=form.avquantity.value;
    const details=form.details.value;
    

    const newtoy={
      nameoftoy,
      purloftoy,
      sellername,
      selleremail,
      subcategory,
      price,
      rating,
      avquantity,
      details
    }


    fetch('http://localhost:5000/addtoy', {
      method: 'POST', 
      headers: {
          'content-type': 'application/json'
      }, 
      body: JSON.stringify(newtoy)
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      if(data.insertedId){
        form.reset();
         notify()
      }
  })



  }
    return (
        <div className='addatoy'>
           <ToastContainer />
            <img className='bgimage' src={bgImage} alt="" />
    <div className="container">
        
    <form className='w-25 addatoyform' onSubmit={handleAddtoy}>
    <h1 className='text-center'>Add A Toy</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Name of the toy</label>
    <input type="text" name='nameoftoy' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of the toy" required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Picture URL of the toy</label>
    <input type="text" name='purloftoy' class="form-control" id="exampleInputPassword1" placeholder="Picture URL of the toy" required/>
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
    <input type="text" name='subcategory' class="form-control" id="exampleInputPassword1" placeholder="Sub-category" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="text" name='price' class="form-control" id="exampleInputPassword1" placeholder="Price" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Rating</label>
    <input type="text" name='rating' class="form-control" id="exampleInputPassword1" placeholder="Rating" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Available Quantity</label>
    <input type="text" name='avquantity' class="form-control" id="exampleInputPassword1" placeholder="Available Quantity" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Detail Description</label>
    <textarea name='details' class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-danger">Add Toy</button>
</form>
    </div>
            
        </div>
    );
};

export default AddaToy;