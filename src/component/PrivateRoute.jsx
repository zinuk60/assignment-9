import { useContext } from 'react';
import { AuthContext } from '../../public/context/ContextApi';
import { Navigate, useLocation, } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const pathLocation=useLocation();
   
    if(loading){
        return <h1>loading...............</h1>
    }
   if(user){
    return children
   }
    return <><Navigate state={pathLocation.pathname} to='/signin'></Navigate></> 
};

export default PrivateRoute;