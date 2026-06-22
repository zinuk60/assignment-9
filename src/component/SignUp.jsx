import  {  useContext, useState } from 'react';
import { AuthContext} from '../../public/context/ContextApi';

import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import {  Link, useNavigate } from 'react-router';


const SignUp = () => {
  const {createUser,googleSignIn, setUser,updateUser}=useContext(AuthContext);
 
  const Navigate= useNavigate()
  const [errorMsg, setErrorMsg]=useState('');
  const [firebaseError, setFirebaseError]=useState('');
  const [showPass, setShowPass]=useState(false)

 const handleGoogleSignIn=()=>{
  googleSignIn()
  .then(result=>{
    alert(result.user.displayName,' you are Logged in successful')
    Navigate('/')
  })
  .catch(error=>{
    console.log(error)
  })
 }

  const onChangePassword=(e)=>{
    const pass = e.target.value;
    // console.log(pass);
    
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
  // console.log(errorMsg)
  const handleForm=(e)=>{
    e.preventDefault()
    // const name= e.target.name.value;
    const email=e.target.email.value;
    const pass=e.target.password.value;
    const name= e.target.name.value;
    const photoUrl= e.target.photoUrl.value;

    if(errorMsg.length != 0){
      return
    }
    createUser(email,pass)
    .then(result=>{
     const user= result.user;
     updateUser({displayName:name, photoURL:photoUrl})
     .then(()=>{
           setUser({...user,displayName:name,photoURL:photoUrl})
     })
     .catch(error=>console.log(error))
        Navigate('/')
    
    })
    .catch(error=>{
      setFirebaseError('Account already exist in this email')
      console.log(error)
    })
    e.target.reset();

  }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
  <div className="">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold text-green-900">Register now!</h1>
  
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleForm} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" name='photoUrl' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' required/>
          <label className="label">Password</label>
        
           <input onChange={onChangePassword} type={showPass? "text":"password"} className="input" placeholder="Password" name='password' required/>
             <div className='relative left-60 bottom-7' onClick={()=>setShowPass(!showPass)}>{showPass? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</div>
 
          
          <p className='text-center text-red-400'>{errorMsg}</p>
          <button className="btn btn-success mt-4">Login</button>
          <p className='text-center text-red-400'>{firebaseError}</p>
              <button onClick={handleGoogleSignIn} className="btn bg-blue-100 mt-4">Login With Google <FaGoogle></FaGoogle></button>
              <p className='text-center'>Already have an account? <Link to={'/signIn'} className='text-green-900 font-bold text-[14px] '>SignIn</Link></p>
        </form>
      </div>
    </div>
  </div>
</div>  





   
        </div>
     
    );
};

export default SignUp;