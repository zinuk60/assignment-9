import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../public/context/ContextApi";
import Avatar from '@mui/material/Avatar';


const Navber = () => {
  const {user, SignOut}=useContext(AuthContext);
 

   const handleSignOut=()=>{
      SignOut()
          .then(()=>console.log('Signout '))
          .catche((error)=>console.log(error) )
   }
   console.log(user)

    return (
        <div  >
         <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow">
        <li><NavLink className={"font-semibold text-green-800"} to="/">Home</NavLink></li>
        <li>
          <NavLink className={"font-semibold text-green-800"} to={`/plants/${1}`}>Plants</NavLink>
        </li>
        <li><NavLink className={"font-semibold text-green-800"} to="/Profile">My Profile</NavLink></li>
    
    {user?   
                <li> 
             <button onClick={handleSignOut} className="btn text-green-800 border border-green-500 hover:bg-green-800 hover:text-white w-20 h-fit mt-2">
              Sign Out
             </button>

                </li>
       :   <Link to={'/signup'}>
                <li> 
             <button className="btn text-green-800 border border-green-500 hover:bg-green-800 hover:text-white w-20 h-fit mt-2">
              Sign Up
             </button>

                </li>
       </Link>}
      </ul>
    </div>
 <div>
    <p className='font-bold text-3xl text-green-600'>Green<span className='text-[#1eea5f] text-4xl'>Nest</span></p>
 </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>  <NavLink className={"font-semibold text-green-800"} to="/">Home</NavLink></li>
      <li>
        <NavLink className={"font-semibold text-green-800"} to={`/plants/${1}`}>Plants</NavLink>
      </li>
      <li> 
                <NavLink className={"font-semibold text-green-800"} to="/Profile">My Profile</NavLink>
                </li>
                
                
    </ul>
  </div>
  <div className="navbar-end">
{user?  <div className="flex gap-2 justify-center items-center">
  <Avatar >{user.email?.charAt(0)}</Avatar>
      <p className="text-xl font-bold text-gray-400 hidden md:flex">{user.email?.slice(0, 5)}...</p>

  <button onClick={handleSignOut} className="btn hidden md:flex text-green-800 border border-green-500  hover:bg-green-800 hover:text-white w-fit h-fit md:h-10 md:w-30 md:mr-2 ">Logout</button>
</div>
                :  <div className="flex justify-center items-center">
                  <Link to={'/signIn'}>
                <button className="btn text-green-800 border border-green-500 hover:bg-green-800 hover:text-white w-fit h-fit md:h-10 md:w-30 md:mr-2 ">Login</button>
               </Link>
                <Link to={'/signUp'}>
                <button className="btn text-green-800 border border-green-500 hover:bg-green-800 hover:text-white w-30  hidden md:flex">Sign Up</button>
           </Link>
                </div>
               }
              
          
  </div>
</div>
            
        </div>
    );
};

export default Navber;  
           