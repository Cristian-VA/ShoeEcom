import useCart from "@/lib/zustand/cart"
import { aggregateCartItems, calculateTotalPrice } from "@/utils"
import { Button } from "@/components/ui/button"
import ProductCardCart from "../components/Cart/ProductCardCart"
import { Link } from "react-router-dom"
const Cart = () => {
  const cart = useCart((state:any) => state.cart)
  
const aggregatedCart = aggregateCartItems(cart)
console.log(cart);
const subtotal = calculateTotalPrice(cart)
console.log(subtotal)
  
  return (
   <div className="w-full min-h-screen py-3">



<div className="relative h-[40px] w-[36px]  flex my-auto cursor-pointer mx-auto " >
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

    
   
  {cart.length > 0? (
    <>
  <div className="overflow-y-scroll  h-[300px] px-3 border-b-[1.5px] border-gray-500 border-opacity-55">
   {aggregatedCart.map((newItem, index) => <ProductCardCart index={index} newItem={newItem}/>)}
   </div>
   <div className="px-3 ">
    <div className=" flex justify-between  py-3 border-gray-500 border-opacity-55 text-[14px] font-medium md:text-[16px]">
      <p >SubTotal</p>
      <p className="pr-3">${subtotal}</p>

    </div>

    <div className=" flex justify-between  py-3 border-gray-500 border-opacity-55 text-[14px] font-medium md:text-[16px]">
      <p>Shipping</p>
      <p className="pr-3">{subtotal >= 75? "FREE": `$${subtotal*0.06}`}</p>

    </div>
    <Button className="btn-black w-full uppercase">Proceed to checkout</Button>

   </div>
   </>
   ) : (
    <div className="flex flex-col  px-3 w-full">
      <h1 className="text-center font-semibold my-4 md:text-[20px]"> Your Cart is Empty</h1>

      <div className="flex flex-col w-full gap-4">

        <Link to={"/collections/men-sneakers"} className="hover:bg-gray-900 transition hover:text-white bg-white text-[16px] py-2  font-medium border-2 border-gray-900 text-center">
        SHOP MEN
        </Link>

        <Link to={"/collections/women-sneakers"} className="hover:bg-gray-900 transition hover:text-white bg-white text-[16px] py-2  font-medium border-2 border-gray-900 text-center">
        SHOP WOMEN
        </Link>

        <Link to={"/collections/kids-sneakers"} className="hover:bg-gray-900 transition hover:text-white bg-white text-[16px] py-2  font-medium border-2 border-gray-900 text-center">
        SHOP KIDS
        </Link>

      </div>

    </div>
   )}

   </div>
    
  )
}

export default Cart