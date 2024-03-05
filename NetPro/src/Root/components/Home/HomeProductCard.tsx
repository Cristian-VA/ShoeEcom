import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='max-w-[370px] w-full shadow-lg flex flex-col'>
      <div className='w-full h-[370px] shadow-sm relative overflow-hidden' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2021/08/31171041/hero-1.jpeg?tr=w-1600" alt="" className={`object-cover h-full ${isHovered ? 'scale-110' : ''} transition-transform duration-300`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-opacity-40 bg-gray-800 flex flex-col items-center justify-center opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-300`}>
          <Link to={"/"} className='btn-inverted w-[70%] max-h-[50px] border-none flex items-center justify-center'> 
            SHOP MEN
          </Link>
        </div>
      </div>

      <div className='px-6 py-3'>
        <h1 className='text-left font-semibold text-[22px] tracking-wide pb-1'>Samba OS</h1>
        <hr className='border-[1.25px] border-gray-600 border-opacity-55' />
        <div className='mt-4 flex gap-3'>
            <img src="/assets/icons/shoe.svg" alt="" className='w-[30px] my-auto'/>
            <p className='text-[18px]'>Active, durable</p>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
