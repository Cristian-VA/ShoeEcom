import { convertTimestampToDate } from "@/lib/utils";
import PopUpModal from "@/Root/components/PopUpModal";
import { useState } from "react";
type OrderProps = {
  images?: string[]; // Make these properties optional with '?'
  productsName?: string[];
  $id: string;
  $createdAt: string;
  colors: string[];
  size: string[];
  quantities: number[];
  subtotal: number;
};

type OrderData = {
  productsName: string[];
  images: string[];
  colors: string[];
  quantities: number[];
  size: string[];
};

type ConvertedOrder = {
  Productsname: string;
  Images: string;
  Colors: string;
  Quantities: number;
  Size: string;
};

export const Orderbox = ({ order }: { order: OrderProps }) => {
  console.log(order);
  const [openModal, setOpenModal] = useState(false);
  const convertOrderData = (orderData: OrderData): ConvertedOrder[] => {
    const convertedOrders: ConvertedOrder[] = [];

    for (let i = 0; i < orderData.productsName.length; i++) {
      const convertedOrder: ConvertedOrder = {
        Productsname: orderData.productsName[i],
        Images: orderData.images[i],
        Colors: orderData.colors[i],
        Quantities: orderData.quantities[i],
        Size: orderData.size[i],
      };
      convertedOrders.push(convertedOrder);
    }

    return convertedOrders;
  };

  const orderData: OrderData = {
    productsName: order.productsName ?? [],
    images: order.images ?? [],
    colors: order.colors,
    quantities: order.quantities,
    size: order.size,
  };

  const orderProducts = convertOrderData(orderData);

  const singleProductMap = orderProducts.map((order, index) => (
    <div key={index} className="flex gap-6 justify-center mb-4 ">
      <img
        src={order.Images}
        alt={order.Productsname}
        className="w-[30%] object-cover"
      />
      <div className="flex flex-col gap-1 w-full">
        <p className="font-medium">{order.Productsname}</p>
        <p className="font-medium text-[14px]">{order.Colors}</p>
        <p className="text-[14px]">Size: {order.Size}</p>
        <p className="text-[14px]">Quantity: {order.Quantities}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex shadow-sm">
        {order?.images && order?.productsName && (
          <img
            src={order.images[0]}
            alt={order.productsName[0]}
            className="w-[100px] object-cover"
          />
        )}
        <div className="flex flex-col justify-center px-3 w-full gap-1">
          <h1 className="font-medium text-[15px]">Order {order?.$id}</h1>
          <div className="flex justify-between w-full ">
            <p className="text-gray-600 text-[14px]">
              {order?.productsName?.length} items
            </p>
            <p className="text-gray-600 text-[14px]">
              {convertTimestampToDate(order?.$createdAt)}{" "}
            </p>
          </div>
          <p
            className="text-gray-600 text-[12px] underline cursor-pointer hover:text-gray-500 transition"
            onClick={() => setOpenModal(true)}
          >
            View Details
          </p>
        </div>
      </div>

      <PopUpModal open={openModal} setOpen={setOpenModal}>
        <div className=" w-full  h-full justify-between  p-6  flex flex-col md:flex-row  ">
          <div className="flex flex-col max-h-[full] overflow-y-scroll  custom-scrollbar1  ">
            {singleProductMap}
          </div>

          <div className="flex w-full max-h-[130px] justify-center md:ml-4    mt-2 md:mt-auto p-4 border-2  border-gray-800 flex-col gap-1">
            <div className="flex justify-between">
              <p className="font-medium">DATE PLACED:</p>
              <p>{convertTimestampToDate(order?.$createdAt)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">ORDER#:</p>
              <p>{order.$id}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">SUBTOTAL: </p>
              <p>${order?.subtotal}.00</p>
            </div>
          </div>
        </div>
      </PopUpModal>
    </>
  );
};
