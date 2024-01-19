
import { Squash as Hamburger } from "hamburger-react"
import { AdultNav } from "./Navigation/AdultNav"
import { KidsNav } from "./Navigation/KidsNav"
import { useState } from "react"
import MobileNav from "./Navigation/MobileNav"
import {AnimatePresence} from "framer-motion"


const Header = () => {
  
  const [isOpen, setOpen] = useState(false)
  
  const toggleOpen = () => {
    setOpen((prevValue) => !prevValue);
  };
 

  return (
    <>
    <div className="container-navigation">
      <div className=" flex w-full justify-between py-3 px-5 ">
        <div className="md:flex gap-2 font-semibold my-auto hidden w-[200px]">
        <AdultNav category="men"/>
        <AdultNav category="women"/>
        <KidsNav/>
          <p className=" px-3 py-1 my-auto"> SALE </p>
        </div>

        <div className="md:hidden block">
          <Hamburger color="#374151" size={26} toggled={isOpen} toggle={setOpen} />
        </div>

        <p className="my-auto mx-auto"> Logo</p>

        <div className="flex gap-4 md:w-[200px] justify-end">

          <img src="assets/icons/user.svg" alt="Log in" className="w-[26px] h-[26px] relative items-end my-auto"/>

          <div className="relative h-[30px] w-8  flex my-auto  ">
            <img
              src="/assets/icons/bag.svg"
              className="w-[26px] h-[26px] relative items-end my-auto"
              alt="cart"
            />
            <div className="absolute top-0 right-0 bg-gray-500 bg-opacity-90  mb-4 w-[17px] h-[17px] flex justify-center items-center border-[1.5px] rounded-full border-white">
              <p className="text-[10px] text-white bg-transparent font-semibold ">
               
                0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <AnimatePresence>
    {isOpen && <MobileNav toggleIsOpen={toggleOpen}/>}
   </AnimatePresence>
   
    </>
  );
};

export default Header;
