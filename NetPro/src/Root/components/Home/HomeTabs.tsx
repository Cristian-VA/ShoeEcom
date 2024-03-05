import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HomeProductCard from './HomeProductCard'
const HomeTabs = () => {
  return (
    <div className='container  py-6 bg-gray-50'>
        <h1 className='font-bold text-center text-[22px] md:text-[28px] lg:text-[32px] bg-gray-50'>Our Favorites</h1>
    <div className='flex items-center justify-center flex-col'>
    <Tabs defaultValue="forEveryday" className="w-full text-center bg-gray-50">
  <TabsList className='flex justify-between max-w-[500px] mx-auto bg-gray-50'>
    <TabsTrigger value="forEveryday" className='uppercase font-medium  text-[16px] text-gray-600 tracking-wide'>For everyday</TabsTrigger>
    <TabsTrigger value="forActivity" className='uppercase font-medium  text-[16px] text-gray-600 tracking-wide'>for actvity</TabsTrigger>
    <TabsTrigger value="forTravel" className='uppercase font-medium  text-[16px] text-gray-600 tracking-wide'>for travel</TabsTrigger>

  </TabsList>
  <TabsContent value="forEveryday">
    <div className='flex justify-around my-6  bg-slate-50' >
   <HomeProductCard/>
   <HomeProductCard/>
   <HomeProductCard/>
    </div>
  </TabsContent>
  <TabsContent value="forActivity">Change your forActivity here.</TabsContent>
  <TabsContent value="forTravel">Change your forTravel here.</TabsContent>
</Tabs>
</div>
</div>

  )
}

export default HomeTabs