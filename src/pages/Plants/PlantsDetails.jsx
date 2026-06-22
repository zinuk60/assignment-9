
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const PlantsDetails = () => {
    const {id}=useParams()
    const plantData= useLoaderData();
    const {plantId,plantName,image,description,price, availableStock,rating,careLevel}= plantData.find(plant=> plant.plantId==id);
    const handleSubmit =(e)=>{
         e.preventDefault()
         const name=e.target.name.value;
         const email=e.target.email.value;
         toast(name+' you brought a plant')
        //  console.log(name,email)
         e.target.reset()
        }

    return (
<div>
          <div className='my-20 flex flex-col md:flex-row justify-center items-center gap-20 '>
          <div>
            <img className='h-[400px] max-w-[400px] ' src={image} alt="Plant image" />
          </div>
          <div className=' md:p-15'>
         <p className='text-2xl font-bold text-green-900'>{plantName}</p>
         <p className='text-gray-600 text-[14px] mt-4 '>{description}</p>
         <p className='flex gap-10 my-5 '>
            <span className='bg-green-100 font-bold w-[150px] text-center rounded-2xl'>Price: ${price}</span>
            <span className='bg-green-100 font-bold w-[150px] text-center rounded-2xl'>Stock: {availableStock}</span> 
           
            </p>
         <p className='flex gap-10 my-5'>
           <span className='bg-amber-100 font-bold w-[150px]  text-amber-900 rounded-2xl text-center flex items-center gap-2 justify-center '>Rating: <FaStar></FaStar>{rating}</span>
            <span className='bg-amber-100 font-bold w-[150px] text-amber-900 rounded-2xl text-center'>Care Level: {careLevel}</span>
            </p>
      
          </div>
        </div>
        <p className='font-extrabold text-3xl text-[#e2ac098d] text-center mb-10'>Get The Plant</p>
        <div className='flex justify-center items-cente'>
          <form onSubmit={handleSubmit} className='w-[350px] h-[200px] flex flex-col justify-center items-center bg-[#f3e5cc55] gap-5 p-5' >
            <input className='w-full border-0 bg-white px-5 rounded-2xl' type="text" name='name' placeholder='Enter your name'  required/>
            <input className='w-full border-0 bg-white px-5 rounded-2xl' type="email" name='email' placeholder='Enter your email' required />

        
            <button  className='btn h-7 text-gray-700 w-full '>Book Now</button>
            <ToastContainer></ToastContainer>
          </form>
        </div>
</div>
    );
};

export default PlantsDetails;