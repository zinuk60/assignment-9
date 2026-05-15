

import Hero from './Hero';
import PlantsCard from './Plants';
import PlantsCare from './PlantsCare';
import PlantsExpert from './PlantsExpert';


const Home = () => {

    return (
        <div>
        <header>
                 <Hero></Hero>  
        </header>
          <main>
                 <PlantsCard></PlantsCard>
                 <PlantsCare></PlantsCare>
                 <PlantsExpert></PlantsExpert>
          </main>
        </div>
    );
};

export default Home;