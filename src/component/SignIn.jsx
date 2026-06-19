import  { useContext, useState } from 'react';
import { AuthContext } from '../../public/context/ContextApi';
import {  Link, useLocation, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const {SignIn, googleSignIn}= useContext(AuthContext)
  const location=useLocation();
const [errorMsg, setErrorMsg]=useState('')
 
  const Navigate=useNavigate()

const handleGoogleSignIn=()=>{
   googleSignIn()
   .then((result)=>{
    alert('signIn successfully')
    Navigate(location.state || '/') 
   })
   .catch(error=>console.log(error))
}

    const handleForm=(e)=>{

        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        SignIn(email,pass)
        .then(result=>{console.log(result.user)
       Navigate(location.state || '/') 
        })
        .catch((error)=>{
          setErrorMsg('Invalid email or password')
        })
         e.target.reset();
           
        
            };
    return (
          <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold text-green-900">Sign In</h1>
  
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleForm} className="fieldset">
       
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' required/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' required/>
          <div><a className="link link-hover">Forgot password?</a></div> 
          <p className='text-red-500 text-center '>{errorMsg}</p>
          <button className="btn btn-success mt-4">Login</button>
          <button onClick={handleGoogleSignIn} className="btn bg-blue-100 mt-4">Login With Google  <FaGoogle /></button>
         <p className='text-center'>Don't have an account? <Link to={'/signUp'} className='text-green-900 font-bold text-[14px] '>SignUp</Link></p>
        </form>

      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;