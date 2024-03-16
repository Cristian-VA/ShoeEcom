import { Button } from '@/components/ui/button'
import {  useAuth } from '../components/utils/AuthContext'
import { useGetCurrentUser } from '@/lib/queries/queries&mutations'
import { useGetOrdersById } from '@/lib/queries/queries&mutations'
import { useEffect } from 'react'

import { Orderbox } from '../../Root/components/Cart/Orderbox'
const Account = () => {
  const { data: user, isPending: loadingUser } = useGetCurrentUser();
  const { data: orders, isPending: loadingOrders, refetch: refetchOrders } = useGetOrdersById(user?.$id || "")

  

  useEffect(() => {
      if (user) {
          refetchOrders(); 
      }
  }, [user, refetchOrders]);

   const {logoutUser} = useAuth()
   

  


const mapOrders = orders?.documents?.map((order, index) => {
 
  return ( <Orderbox order={order} key={index}/>
)}
)


   
  return (
    <div className='flex flex-col  bg-gray-100'>
       <div className='container bg-gray-100 max-w-[1440px]'>

      <h1 className='font-semibold capitalize text-center my-6 text-[18px] md:text-[24px] bg-gray-100'> my account</h1>

      <div className='flex flex-col md:flex-row bg-gray-100 md:justify-between'>
      
      {!loadingOrders?<div className='w-full bg-gray-100 flex flex-col gap-3 mb-6 md:w-[730px] mr-6'>
        {mapOrders}
      </div>: <h1>Loading...</h1>}
      <div className='w-full md:w-[450px] p-6 mb-6 flex flex-col gap-2 h-[160px]'>
        <h1 className='font-medium capitalize text-[18px]'>Hello, {user?.name}</h1>
        <h1 className=' capitalize text-[16px]'>{user?.email}</h1>
      <Button className='btn-black w-full' onClick={() => logoutUser()} >logout</Button>
        

      </div>
      </div>
      </div>
        
    </div>
  )
}

export default Account