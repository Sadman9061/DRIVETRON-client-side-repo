
import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";


import BannerHome from "../components/banners/BannerHome";
import DriveSmart from "../components/DriveSmart";




const Home = () => {
 
    return (
        <div >

          <BannerHome></BannerHome>
          

          <Outlet></Outlet>
          <DriveSmart></DriveSmart>
          
          <Contact></Contact>
        </div>

    );
};

export default Home;