import { NavLink } from "react-router";


const Navber = () => {
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink className={"font-semibold text-green-800"} to="/">Home</NavLink></li>
        <li>
          <NavLink className={"font-semibold text-green-800"} to={`/plants/{1}`}>Plants</NavLink>
        </li>
        <li><NavLink className={"font-semibold text-green-800"} to="/Profile">My Profile</NavLink></li>
    
                <li> 
                    <button className="btn text-green-800 border border-green-500 hover:bg-green-800 hover:text-white w-20 h-fit mt-2">Sign Up</button>

                </li>
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

                <button className="btn text-green-800 border border-green-500 hover:bg-green-800 hover:text-white w-fit h-fit md:h-10 md:w-30 md:mr-2 ">Login</button>
                <button className="btn text-green-800 border border-green-500 hover:bg-green-800 hover:text-white w-30  hidden md:flex">Sign Up</button>
  </div>
</div>
            
        </div>
    );
};

export default Navber;  
           