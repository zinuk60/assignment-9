import { useContext } from 'react';
import { AuthContext } from '../../../public/context/ContextApi';

const Profile = () => {
    const {user,updateUser,setUser,loading}=useContext(AuthContext);
   const handleUpdate=(e)=>{
      e.preventDefault();
      const Name= e.target.name.value;
      const photoUrl= e.target.photoUrl.value;
      updateUser({displayName:Name,photoURL:photoUrl})

      .then(()=>{
        console.log('Updated successfully')
        setUser({...user,displayName:Name,photoURL:photoUrl})
      }
    )
      .catch(error=>alert(error))
      e.target.reset()

    }
    return (

        <div className='my-30 flex flex-col justify-center items-center gap-5'>
         {loading && <p className='text-center text-2xl font-bold text-green-900'>Loading...</p>}
      <div >
        <img className='rounded-full' src={user.photoURL} alt="" />
      </div>
         <div className=' text-center '>
          <p className='font-bold text-4xl text-gray-800'>{user.displayName}</p>
          <p className='text-[14px] text-gray-600'>{user.email}</p>
         </div>
         <div >
          <p className='font-bold text-[27px] text-green-900 text-center mt-10 mb-5'>UPDATE YOUR PROFILE</p>
                   <form className='fieldset ' onSubmit={handleUpdate}>
             <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' required />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" name='photoUrl' required />
          <button className='btn btn-success text-center'>Update</button>
         </form>
         </div>
        </div>
    );
};

export default Profile;