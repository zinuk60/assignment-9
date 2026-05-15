import { Outlet } from "react-router";
import Navber from "../component/Navber";
import Footer from "../component/Footer";


const HomeLayOut = () => {
    return (
     <div className="bg-gray-50">
           <div className="w-11/12 mx-auto  ">
         <nav>
                   <Navber></Navber>
         </nav>
         <main>
            <Outlet></Outlet>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
        </div>
     </div>
    );
};

export default HomeLayOut;