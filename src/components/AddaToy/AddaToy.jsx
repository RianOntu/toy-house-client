import React from 'react';
import './AddaToy.css';
import bgImage from '../../assets/addatoy.jpg'

const AddaToy = () => {
    return (
        <div className='addatoy'>
            <img className='bgimage' src={bgImage} alt="" />
    <div className="container">
        
    <form className='w-25 addatoyform'>
    <h1 className='text-center'>Add A Toy</h1>
  <div class="form-group">
    <label for="exampleInputEmail1">Name of the toy</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of the toy"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Picture URL of the toy</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Picture URL of the toy"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Seller Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Seller Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Seller Email</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Seller Email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Sub-category</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Sub-category"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Price"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Rating</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Rating"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Available Quantity</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Available Quantity"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Detail Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button type="submit" class="btn btn-danger">Add Toy</button>
</form>
    </div>
            
        </div>
    );
};

export default AddaToy;