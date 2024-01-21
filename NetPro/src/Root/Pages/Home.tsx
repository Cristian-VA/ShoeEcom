import React from 'react'

const Home = () => {
  return (
    <div className='container'>

      <div className='relative hidden md:block'>
      <img
              src="/assets/Home/Banner.png"
              className="w-full"
              alt="Logo"
            />
             <div className='absolute left-0 top-[40%]   bg-white  flex flex-col  p-5 text-[20px] '>
              <h1 className='font-bold  mb-2 leading-snug'> FEATURED</h1>
              <p className='text-[18px]'> Women New Arrivals</p>
              <p className='text-[18px]'> Men New Arrivals</p>

      </div>
     
      </div>
      </div>
  )
}

export default Home