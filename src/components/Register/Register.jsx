import React, { useContext, useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { AuthenticationContext, auth } from '../Providers/AuthenticationProvider';
import { updateProfile } from 'firebase/auth';
import registerimg from '../../assets/registration.webp';




const Register = () => {
  const [success,setSuccess]=useState('');
  const [error,setError]=useState('');
  const {registerUser}=useContext(AuthenticationContext);

const handleRegister=(event)=>{

  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const email=form.email.value;
  const password=form.password.value;
  const photo_url=form.purl.value;

  if(password.length<6){
      setError('Password should be six characters long!');
      return;
  }
  if(!/^(?=.*[\W_].*[\W_])/.test(password)){
    setError("Please enter atleast two special characters!")
    return;
  }
  registerUser(email,password).then(result=>{
    const newUser=result.user;
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo_url
    }).then(() => {
      setError('');
      setSuccess('User has been registered successfully!')
    }).catch((error) => {
      
    });
    console.log(newUser);
  }).catch(error=>setError(error.message))
  form.reset();

 

}
     





    return (
   <div className="container">
    <div className="row">
        <div className="col-md-6 mt-5 mb-5">
<img className='registerimg' src={registerimg} alt="" />
        </div>
    <div className='formpage  mx-auto mt-5 mb-5 col-md-6'>
          <p className='text-danger text-center'>{error}</p>
          <p className='text-success text-center'>{success}</p>
            <h1 className='text-center'>Please Register</h1>
            <form className='w-50 mx-auto' onSubmit={handleRegister}>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Name:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" placeholder="Enter your name" required/>
   
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" required/>
    
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Password:</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' placeholder="Password" required/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Photo URL:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='purl' aria-describedby="emailHelp" placeholder="Enter your photo URL" required/>
   
  </div>

  <p>Already have an account?Please <Link className='register' to='/login'>Login</Link></p>
  
  <button type="submit" class="btn btn-danger">Register</button>
</form>
        </div>
    </div>
   </div>
    );
};

export default Register;