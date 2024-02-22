import useCart from "@/lib/zustand/cart"
import { aggregateCartItems } from "@/utils"
import { Button } from "@/components/ui/button"
import ProductCardCart from "../components/Cart/ProductCardCart"

const Cart = () => {
  const addToCart = useCart((state:any) => state.addToCart)
  const removeFromCart = useCart((state:any) => state.removeFromCart)
  const cart = useCart((state:any) => state.cart)
  
const aggregatedCart = aggregateCartItems(cart);
console.log(aggregatedCart);

  
  return (
   <div className="w-full min-h-screen py-3">
   
   <div className="overflow-y-scroll  h-[300px] px-3 border-b-[1.5px] ">
   {aggregatedCart.map((newItem, index) => <ProductCardCart index={index} newItem={newItem}/>)}
   </div>
   <div className="px-3 ">
    <div className=" flex justify-between  py-3 border-gray-500 border-opacity-55 text-[14px]">
      <p>SubTotal</p>
      <p className="pr-3">$999</p>

    </div>

    <div className=" flex justify-between  py-3 border-gray-500 border-opacity-55 text-[14px]">
      <p>Shipping</p>
      <p className="pr-3">FREE</p>

    </div>
    <Button className="btn-black w-full uppercase">Proceed to checkout</Button>

   </div>
   </div>
    
  )
}

export default Cart