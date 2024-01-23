import React from "react";
import Homebanner from "../components/Home/Homebanner";
import Homebanner2 from "../components/Home/Homebanner2";
import { Banner1, Banner2 } from "@/constants";


const Home = () => {
  return (
    
    
    <div className="  w-full  mx-auto">
      <div className=" px-5 md:px-10 max-w-[1440px] w-full mx-auto">
      <Homebanner/>
      </div>
      <Homebanner2 Banner={Banner1}/>
      <Homebanner2 Banner={Banner2}/>
    </div>
    
    
  
  
  )
}

export default Home;
