import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HomeProductCard from './HomeProductCard'
import HomeProductSlider from './HomeProductsSlider';
import { Everyday1, Everyday2, Everyday3, Active1, Active2,Traveling3, Traveling1, Traveling2 } from '@/constants';
const HomeTabs = () => {
  return (
    <div className="flex flex-1 flex-col bg-gray-50   justify-center items-center">
    <div className='container my-10 md:my-14 bg-gray-50'>
        <h1 className='font-bold text-center text-[22px] md:text-[28px] mb-2 md:mb-3 lg:text-[32px] bg-gray-50'>Our Favorites</h1>
    <div className='flex items-center justify-center flex-col'>
    <Tabs defaultValue="forEveryday" className="w-full text-center bg-gray-50">
  <TabsList className='flex justify-between max-w-[500px] mx-auto bg-gray-50'>
    <TabsTrigger value="forEveryday" className='uppercase font-medium  text-[16px] text-gray-600 tracking-wide'>For everyday</TabsTrigger>
    <TabsTrigger value="forActivity" className='uppercase font-medium  text-[16px] text-gray-600 tracking-wide'>for actvity</TabsTrigger>
    <TabsTrigger value="forHiking" className='uppercase font-medium  text-[16px] text-gray-600 tracking-wide'>for Hiking</TabsTrigger>

  </TabsList>
  <TabsContent value="forEveryday" className="bg-gray-100" >
   
    <HomeProductSlider>
    <HomeProductCard HomeCardProps={Everyday1} />
    <HomeProductCard HomeCardProps={Everyday2}/>
    <HomeProductCard HomeCardProps={Everyday3}/>
    </HomeProductSlider>
    

    

  </TabsContent>
  <TabsContent value="forActivity">
  <HomeProductSlider>
    <HomeProductCard HomeCardProps={Active1}/>
    <HomeProductCard HomeCardProps={Active2}/>
    </HomeProductSlider>
  </TabsContent>
  <TabsContent value="forHiking">
    
    <HomeProductSlider>
    <HomeProductCard HomeCardProps={Traveling1}/>
    <HomeProductCard HomeCardProps={Traveling2}/>
    <HomeProductCard HomeCardProps={Traveling3}/>
    </HomeProductSlider>
  </TabsContent>
</Tabs>
</div>
</div>
</div>

  )
}

export default HomeTabs