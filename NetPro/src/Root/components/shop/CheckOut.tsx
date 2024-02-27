import React from "react";
import ProductCardCart from "../Cart/ProductCardCart";
import { Button } from "@/components/ui/button";
import useCart from "@/lib/zustand/cart";
import { calculateTotalPrice, aggregateCartItems } from "@/utils";


const CheckOut = ({ product, setOpen }: { product: any, setOpen:any }) => {
    const cart = useCart((state:any) => state.cart)

    const toggleOpenCart = useCart((state:any) => state.toggleIsOpen)
    const subtotal = calculateTotalPrice(cart)
    const aggregatedCart = aggregateCartItems(cart)

    const closeModalAndOpenCart = () =>{
        setOpen(false)
        toggleOpenCart(false)
    }

  


  return (
    <div className="px-3 py-2">

<div className="relative h-[40px] w-[36px]  flex my-auto  mx-auto " >
              <img
                src="/assets/icons/bag.svg"
                className="w-[32px] h-[32px] relative items-end my-auto"
                alt="cart"
              />
              <div className="absolute top-0 right-0 bg-gray-500 bg-opacity-90  mb-4 w-[17px] h-[17px] flex justify-center items-center border-[1.5px] rounded-full border-white">
                <p className="text-[10px] text-white bg-transparent font-semibold ">
                  {aggregatedCart.length}
                </p>
              </div>
            </div>
    
    <div className="w-full px-3  bg-opacity-70 my-2">
      <div className={`h-[12px] ${subtotal >= 100? "bg-emerald-500": subtotal == 0? "bg-gray-200":"bg-sky-500"} bg-opacity-80 transition-colors`}></div>
      <h1 className="text-center my-2 font-medium text-[11px] md:text-[14px]">{subtotal >= 100? "Congratulations! You achieved standard Free Shiping":`$${100 - subtotal} Left for Free Shipping`}</h1>

    </div>
      <div className="w-full sm:flex ">
        <div className=" sm:w-[50%] w-full">
          <ProductCardCart newItem={product} />
        </div>
        <div className="  sm:w-[50%] w-full flex flex-col justify-center  ">
            <div className="flex w-full justify-between my-4 font-medium">
                <h1>SUBTOTAL:</h1>
                <p>${subtotal}</p>

            </div>

            <div className="flex flex-col w-full gap-2">
            <Button onClick={closeModalAndOpenCart} className="btn-black hover:bg-white w-full px-3"> VIEW CART AND CHECKOUT</Button>
            <Button onClick={() => setOpen(false)} className="btn-inverted hover:bg-gray-800 w-full px-3"> CONTINUE SHOPPING</Button>

            </div>

        </div>
      </div>
    </div>
  );
};

export default CheckOut;

