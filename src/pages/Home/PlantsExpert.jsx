import Marquee  from "react-fast-marquee";


const PlantsExpert = () => {
    return (
        <div className="mb-20">
            <p className='font-bold text-blue-900 text-4xl my-20 text-center'>Meet Our Plants Expert</p>
  <Marquee.default speed={100} pauseOnHover={true}>
       <div className="flex  gap-15">
               <div className="flex justify-around items-center h-20 w-55 bg-white shadow-2xl p-4">
                <img className="w-10 h-10 rounded-full"  src="https://i.ibb.co.com/PZZ113v3/Rattan-Lal.jpg" alt="" />
                <div>
                    <p className="font-bold font-black text-sm">Dr. Rattan Lal</p>
                    <p className="text-xs font-bold text-gray-500">Soil Specialist</p>
                </div>
            </div>

               
           
               <div className="flex justify-around items-center h-20 w-55 bg-white shadow-2xl p-4">
                <img className="w-10 h-10 rounded-full"  src="https://i.ibb.co.com/mrsXwp3R/images.jpg" alt="" />
                <div>
                    <p className="font-bold font-black text-sm">Monty Don</p>
                    <p className="text-xs font-bold text-gray-500">Horticulturist</p>
                </div>
            </div>
               <div className="flex justify-around items-center h-20 w-55 bg-white shadow-2xl p-4">
                <img className="w-10 h-10 rounded-full"  src="https://i.ibb.co.com/xtRX2nXZ/ekta-img.webp" alt="" />
                <div>
                    <p className="font-bold font-black text-sm">Dr. Ekta Chaudhary</p>
                    <p className="text-xs font-bold text-gray-500">Ecologist</p>
                </div>
            </div>
               <div className="flex justify-around items-center h-20 w-55 bg-white shadow-2xl p-4">
                <img className="w-10 h-10 rounded-full"  src="https://i.ibb.co.com/gL4J3MmL/DC2022v3-683x1024.jpg" alt="" />
                <div>
                    <p className="font-bold font-black text-sm">Darryl Cheng</p>
                    <p className="text-xs font-bold text-gray-500">Houseplant Consultant</p>
                </div>
            </div>
     </div>
  </Marquee.default>
        </div>
    );
};

export default PlantsExpert;