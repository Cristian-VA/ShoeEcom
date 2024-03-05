import Homebanner from "../components/Home/Homebanner";
import Homebanner2 from "../components/Home/Homebanner2";
import Contact from "../components/Home/Contact";
import { Banner1, Banner2 } from "@/constants";
import HomeTabs from "../components/Home/HomeTabs";


const Home = () => {
  return (
    
    
    <div className="  w-full  mx-auto">
      <div className=" px-5 md:px-10 max-w-[1440px] w-full mx-auto">
      <Homebanner/>
      </div>
      <HomeTabs/>
      <Homebanner2 Banner={Banner1}/>
      <Homebanner2 Banner={Banner2}/>
      <Contact/>
    </div>
    
    
  
  
  )
}

export default Home;
