//@ts-nocheck
import { Button } from "@/components/ui/button";
import useCart from "@/lib/zustand/cart";
const ProductCardCart = ({  newItem,  index,}: {
  newItem: any;
  index?: number;
}) => {
  const addToCart = useCart((state: any) => state.addToCart);
  const removeFromCart = useCart((state: any) => state.removeFromCart);
  return (
    <div className="flex gap-4  py-6 md:py-8 border-gray-600 border-opacity-55 ">
      <img
        src={newItem.image}
        alt={newItem.productName}
        className="object-cover w-[40%] sm:w-[30%] "
      />

      <div className="flex flex-col justify-start gap-[4px] w-full">
        <h1 className="font-semibold">{newItem.productName}</h1>
        <p className="text-[14px]">{newItem.color}</p>
        <p className="text-[14px]">Size: {newItem.size}</p>

        <div className="flex w-full justify-between">
          {index >= 0 &&  <div className="border-2 border-gray-400 border-opacity-55 flex   justify-around text-[16px] font-medium">
            <Button
              className="hover:text-gray-800 text-gray-400 transition text-[20px] p-2 md:p-4"
              onClick={() => addToCart({ newItem })}
            >
              +
            </Button>
            <p className="my-auto mx-2 ">{newItem.quantity}</p>
            <Button
              className="hover:text-gray-800 text-gray-400 transition p-2 md:p-4 text-[20px]"
              onClick={() => removeFromCart({ index })}
            >
              -
            </Button>
          </div>}

          <p className="my-auto pr-3 font-medium">${newItem.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
