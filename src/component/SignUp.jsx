import  { useContext, useState } from 'react';
import { AuthContext } from '../../public/context/ContextApi';
import { sendEmailVerification } from 'firebase/auth';

import {  useNavigate } from 'react-router';

const SignUp = () => {
  const {createUser,user}=useContext(AuthContext);
  console.log(user)
  const Navigate= useNavigate()
  const [errorMsg, setErrorMsg]=useState('');
 const [firebaseError, setFirebaseError]=useState('')

  const onChangePassword=(e)=>{
    const pass = e.target.value;
    console.log(pass);
    
    if(pass.length<6){
      setErrorMsg('Password must be longer 6 characters')
    }else if(!/[A-Z]/.test(pass)){
      setErrorMsg('Upper case later needed');
    }else if(!/[a-z]/.test(pass)){
      setErrorMsg('lower case later needed');
    }else if(!/[0-9]/.test(pass)){
      setErrorMsg('number needed');
    }else{
      setErrorMsg('')
    }

  }
  console.log(errorMsg)
  const handleForm=(e)=>{
    e.preventDefault()
    // const name= e.target.name.value;
    const email=e.target.email.value;
    const pass=e.target.password.value;
    if(errorMsg.length != 0){
      return
    }
    createUser(email,pass)
    .then(result=>{
      sendEmailVerification(result.user)
      .then(()=>{
        alert('Please verify your email address')
        Navigate('/')
      })
      .catch(error=>{
          

        console.log(error)
      })
    })
    .catch(error=>{
      setFirebaseError('Account already exist in this email')
      console.log(error)
    })
    e.target.reset();

  }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold text-green-900">Register now!</h1>
  
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleForm} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' required/>
          <label className="label">Password</label>
          <input onChange={onChangePassword} type="password" className="input" placeholder="Password" name='password' required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <p className='text-center text-red-400'>{errorMsg}</p>
          <button className="btn btn-success mt-4">Login</button>
          <p className='text-center text-red-400'>{firebaseError}</p>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;