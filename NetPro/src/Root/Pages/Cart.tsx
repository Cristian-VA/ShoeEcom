import useCart from "@/lib/zustand/cart"
import { aggregateCartItems } from "@/utils"


const Cart = () => {

  const cart = useCart((state:any) => state.cart)
 
const aggregatedCart = aggregateCartItems(cart);
console.log(aggregatedCart);

  
  return (
   <div className="w-full min-h-screen">
    hello
   </div>
    
  )
}

export default Cart