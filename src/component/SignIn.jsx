import  { useContext } from 'react';
import { AuthContext } from '../../public/context/ContextApi';
import {  useNavigate } from 'react-router';

const SignIn = () => {
  const {SignIn}= useContext(AuthContext)
  const Navigate=useNavigate()
    const handleForm=(e)=>{

        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        SignIn(email,pass)
        .then(result=>{console.log(result.user)
       Navigate('/') 
        })
        .catch(error=>console.log(error))
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
          <button className="btn btn-success mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;