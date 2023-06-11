import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center'>Let's Connect</h1>
            <form className='w-25 mx-auto'>
           
  <div class="form-group">
    <label for="exampleInputEmail1">Your Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Your Message</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Message"/>
  </div>
  
  <button type="submit" class="btn btn-danger w-100">Submit</button>

            </form>
            
        </div>
    );
};

export default ContactUs;