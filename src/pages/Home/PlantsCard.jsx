import { use } from "react";
import Card from "./Card";


const PlantCard = ({ plantsData }) => {
    const plants = use(plantsData);

    return (
        <div className="my-20">
            <p className="font-bold text-4xl text-center text-green-900 mb-10">Our Top Rated Plants</p>

         <div className="grid justify-center items-center grid-cols-1 md:grid-cols-3 gap-20">
              {
            plants.map(plant=> <Card key={plant.plantId} plant={plant}></Card>)
           }
         </div>
        </div>
    );
};

export default PlantCard;