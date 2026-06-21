
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from '../../public/context/ContextApi';
import { Auth } from '../firebase.init';
import { useEffect, useState } from "react";

const ContextProvider = ({children}) => {
 

  const [user,setUser] = useState(null);
  const [loading, setLoading]=useState(true);
  const googleProvider=new GoogleAuthProvider();

  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  }

    const createUser=(email,pass)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(Auth,email,pass)
   
    }
   const  SignIn=(email,pass)=>{
      setLoading(true)
      return signInWithEmailAndPassword(Auth,email,pass)
   }
   const SignOut=()=>{
    setLoading(true);
    return signOut(Auth)
   }
   useEffect(
              ()=>{
                const unSubscribe=onAuthStateChanged(Auth,(User)=>{
                  setUser(User);
                  setLoading(false);

                })
                return ()=>{
                  unSubscribe()
                }
              }
   )


   const updateUser=(updateInfo)=>{
    setLoading(true)
    return updateProfile(Auth.currentUser,updateInfo);
   }

const passwordReset=(email)=>{
  setLoading(true)
  return sendPasswordResetEmail(Auth,email)
}

    const AuthInfo={
        createUser,
        SignIn,
        SignOut,
        loading,
        user,
        setUser,
        googleSignIn,
        passwordReset,
        updateUser
       
        

    }
    return (
      <AuthContext value={AuthInfo}>
        {children}
      </AuthContext>
    );
};

export default ContextProvider;