
import { Suspense } from "react";
import PlantCard from "./PlantsCard";
const plantsData = fetch('/plantsData.json').then(res => res.json())

const PlantsCard = () => {


    return (
        <div>
            <Suspense fallback={<div><span className="loading loading-infinity loading-xl"></span></div>}>
                <PlantCard plantsData={plantsData}></PlantCard>
            </Suspense>
        </div>
    );
};

export default PlantsCard;