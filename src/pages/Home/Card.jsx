import { FaStar } from "react-icons/fa";
import { Link } from "react-router";


const Card = ({plant}) => {
    return (
        <div className="flex flex-col  h-[350px] w-[300px] p-3 bg-white rounded-lg shadow-lg">
            <p className="font-bold text-xl text-green-950">{plant.plantName}</p>
       <div  className="flex justify-center items-center mt-3">
             <img  className=" h-44 w-44" src={plant.image} alt={plant.plantName} />
       </div>

           <div className="flex justify-between mt-3 font-semibold ">
         <p>price: ${plant.price}</p>
         <p className="flex justify-center items-center gap-2"><FaStar></FaStar> {plant.rating}</p>
           </div>
           <div className="flex justify-center items-center mt-6">
            <Link to={`/plants/${plant.plantId}`} className="text-green-950 bg-green-300 p-1 px-3 rounded-lg hover:text-white hover:bg-orange-500 font-semibold">
              View Details
            </Link>
           </div>
        </div>
    );
};

export default Card;