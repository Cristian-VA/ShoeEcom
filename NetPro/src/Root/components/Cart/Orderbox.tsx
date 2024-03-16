import { convertTimestampToDate } from '@/lib/utils';
import PopUpModal from '@/Root/Layout/Shop/PopUpModal';
import { useState } from 'react';
type OrderProps = {
    images?: string[]; // Make these properties optional with '?'
    productsName?: string[];
    $id: string;
    $createdAt: string;
    colors: string[];
    size: string[];
    quantities: number[];
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
    
  
    const [openModal, setOpenModal] = useState(false)
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

    const orderProducts = convertOrderData(orderData)

    console.log(orderProducts)
    
    

   
    return (
        <>
        <div className='flex shadow-sm'>
            {order?.images && order?.productsName && (
                <img src={order.images[0]} alt={order.productsName[0]} className='w-[100px] object-cover' />
            )}
            <div className='flex flex-col justify-center px-3 w-full gap-1'>
                <h1 className='font-medium'>Order {order?.$id}</h1>
                <div className='flex justify-between w-full'>
                    <p className='text-gray-600 text-[14px]'>{order?.productsName?.length} items</p>
                    <p className='text-gray-600 text-[14px]'>{convertTimestampToDate(order?.$createdAt)} </p>
                </div>
                <p className='text-gray-600 text-[12px] underline' onClick={()=> setOpenModal(true)}>View Details</p>
            </div>
        </div>


      <PopUpModal open={openModal}  setOpen={setOpenModal}>
        <h1>Hello</h1>
      </PopUpModal>

        </>
    );
};
