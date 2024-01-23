import React from 'react'
import { Button } from '@/components/ui/button'
import { Ban } from 'lucide-react'

type BannerType = {
    BannerImg: string,
    MobileImg: string,
    Heading: string,
    message: string
}


const Homebanner2 = ({Banner}:{Banner:BannerType}) => {
  return (
    <div className='flex flex-1 flex-col'>
        <img src={Banner.BannerImg} className='object-cover max-h-[475px] hidden md:block'/>
        <img src={Banner.MobileImg} className='object-cover max-h-[400px] md:hidden block'/>
        <div className='flex flex-col items-center my-10 '>
            <h1 className='text-[36px] font-bold'>{Banner.Heading}</h1>
            <p className='text-[20px] text-center max-w-[500px] my-5'>{Banner.message}</p>
            <div className=' flex gap-8'>
            <Button className="bg-gray-900 transition text-white hover:bg-white text-[16px] py-5 px-7 font-semibold drop-shadow-sm "> SHOP MEN</Button>
                <Button className= "bg-gray-900 transition text-white hover:bg-white text-[16px] py-5 px-7 font-semibold drop-shadow-sm "> SHOP WOMEN</Button>
            </div>

        </div>
    </div>
  )
}

export default Homebanner2