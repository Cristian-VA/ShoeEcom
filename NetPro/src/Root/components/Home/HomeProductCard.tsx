import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeCardProps } from '@/types';

const HomeProductCard = ({HomeCardProps}:{HomeCardProps:HomeCardProps}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='xl:max-w-[410px] w-full shadow-lg min-w-[100%] sm:min-w-[50%] lg:min-w-[0px] flex flex-col'>
      <div className='w-full h-[400px] shadow-sm relative overflow-hidden' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={HomeCardProps.imgUrl} alt={HomeCardProps.productName} className={`object-cover w-full h-full ${isHovered ? 'scale-110' : ''} transition-transform duration-300`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-opacity-40 bg-gray-800 flex flex-col items-center justify-center opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-300`}>
          {HomeCardProps.LinkMen &&<Link to={HomeCardProps.LinkMen || "/"} className='btn-inverted my-3 w-[70%] max-h-[50px] border-none flex items-center justify-center'> 
            SHOP MEN
          </Link>}
          {HomeCardProps.LinkWomen &&<Link to={HomeCardProps.LinkWomen || "/"} className='btn-inverted my-3 w-[70%] max-h-[50px] border-none flex items-center justify-center'> 
            SHOP WOMEN
          </Link>}
        </div>
      </div>

      <div className='px-6 py-3'>
        <h1 className='text-left font-semibold text-[22px] tracking-wide pb-1 capitalize'>{HomeCardProps.productName}</h1>
        <hr className='border-[1.25px] border-gray-600 border-opacity-55' />
        <div className='mt-4 flex gap-3'>
            <img src="/assets/icons/shoe.svg" alt="" className='w-[30px] my-auto'/>
            <p className='text-[18px] capitalize'>{HomeCardProps.tags}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
