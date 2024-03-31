import { Squash as Hamburger } from "hamburger-react";
import { AdultNav } from "./Navigation/AdultNav";
import { KidsNav } from "./Navigation/KidsNav";
import { useState } from "react";
import MobileNav from "./Navigation/MobileNav";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "@/Auth/components/utils/AuthContext";
import useCart from "@/lib/zustand/cart";
import { Cart } from "../Pages";
import PopUpSideBar from "../components/PopUpSideBar";
import { aggregateCartItems } from "@/utils";
const Header = () => {
  const [isOpen, setOpen] = useState(false);


  const {user} = useAuth()
  const cart = useCart((state:any) => state.cart)
  
    const isOpenCart = useCart((state:any) => state.open)
    const toggleOpenCart = useCart((state:any) => state.toggleIsOpen)
 
  const aggregatedCart = aggregateCartItems(cart);


  const toggleOpen = () => {
    setOpen((prevValue) => !prevValue);
  };


  return (
    <>
      <div className="container-navigation sticky top-0 z-50 shadow">
        <div className=" flex w-full justify-between    ">
          <div className="md:flex gap-2 font-semibold my-auto hidden w-[200px]">
            <AdultNav category="men" />
            <AdultNav category="women" />
            <KidsNav />
          </div>

          <div className="md:hidden block">
            <Hamburger
              color="#374151"
              size={26}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>

          <Link to={"/"} className="flex text-[20px]">
            <p className="my-auto mx-auto font-bold"> QUILL</p>
            <p className="my-auto">Stride</p>
            <img
              src="/assets/Navigation/Logo.png"
              className="w-[30px] h-[30px] ml-2  my-auto md:my-0"
              alt="Logo"
            />
          </Link>

          <div className="flex gap-4 md:w-[200px] justify-end" >
               
             
            {user?  (
              <Link to={"/account"} className="my-auto">
              <h1> Hello, <span className="capitalize font-semibold">{user?.name}</span></h1>
              </Link>
            ) :(<Link to={"/account/login"} className="my-auto">
              <img
                src="/assets/icons/user.svg"
                alt="Log in"
                className="w-[26px] h-[26px] relative items-end my-auto"
              />
            </Link>)}
          
            <div className="relative h-[30px] w-8  flex my-auto cursor-pointer " onClick={toggleOpenCart}>
              <img
                src="/assets/icons/bag.svg"
                className="w-[26px] h-[26px] relative items-end my-auto"
                alt="cart"
              />
              { aggregatedCart.length > 0 && <div className="absolute top-0 right-0 bg-gray-500 bg-opacity-90  mb-4 w-[17px] h-[17px] flex justify-center items-center border-[1.5px] rounded-full border-white">
                <p className="text-[10px] text-white bg-transparent font-semibold ">
                  {aggregatedCart.length}
                </p>
              </div>}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <MobileNav toggleIsOpen={toggleOpen} />}
      </AnimatePresence>

      <PopUpSideBar open={isOpenCart} setOpen={toggleOpenCart}>
       <Cart/>
        </PopUpSideBar>

      
    </>
  );
};

export default Header;
