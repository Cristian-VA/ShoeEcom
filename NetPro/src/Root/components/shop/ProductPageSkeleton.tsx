
import { menShoeSizes } from '@/constants';
import { Skeleton } from '@/components/ui/skeleton';

const ProductPageSkeleton = () => {

  


      

  return (
    <>
      <div className='container my-6 flex flex-col lg:flex-row  md:gap-8 gap-4 '>
        <div className='flex md:gap-8 gap-4 sm:flex-row flex-col max-h-[550px] h-full max-w-[750px] w-full  '>
          <div className='flex sm:flex-col gap-2  '>
          <div className="max-w-[80px]  max-h-[80px]   overflow-hidden" >
            <Skeleton className=" w-[70px] h-[70px]  bg-gray-200" />
          </div>
          <div className="max-w-[80px]  max-h-[80px]   overflow-hidden" >
            <Skeleton className=" w-[70px] h-[70px]  bg-gray-200" />
          </div>
          <div className="max-w-[80px]  max-h-[80px]   overflow-hidden" >
            <Skeleton className=" w-[70px] h-[70px]  bg-gray-200" />
          </div>
          <div className="max-w-[80px]  max-h-[80px]   overflow-hidden" >
            <Skeleton className=" w-[70px] h-[70px]  bg-gray-200" />
          </div>
          <div className="max-w-[80px]  max-h-[80px]   overflow-hidden" >
            <Skeleton className=" w-[70px] h-[70px]  bg-gray-200" />
          </div>
         
          
          </div>
          <Skeleton className=" w-full h-full min-h-[400px]  bg-gray-200" />
          </div>

          <div >
          <Skeleton className=" w-full h-[18px] bg-gray-200 mb-4" />
          <Skeleton className=" w-full h-[32px] bg-gray-200 mb-4" />
            <div className='flex gap-6 '>
            <Skeleton className="  h-[20px] w-[120px] bg-gray-200" />
             
            </div>

            <div className='md:my-10 my-6'>

            <Skeleton className="  h-[28px] w-[160px] bg-gray-200 mb-4" />
              
            <div className='flex gap-2 md:gap-4 flex-wrap  '>

            <div className="max-w-[80px]  max-h-[80px] overflow-hidden" >
            <Skeleton className=" w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]  bg-gray-200" />
            </div>
            <div className="max-w-[80px]  max-h-[80px]   overflow-hidden" >
            <Skeleton className=" w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]  bg-gray-200" />
            </div>
            <div className="max-w-[80px]  max-h-[80px]   overflow-hidden" >
            <Skeleton className=" w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]  bg-gray-200" />
            </div>
              
                
            </div>
               

            </div>


            <div className='md:my-10 my-6'>

            <Skeleton className="  h-[28px] w-[160px] bg-gray-200 mb-4" />
              
            <div className='flex gap-2 flex-wrap   '>
              
                {menShoeSizes.map(( index:string) => (
                  <div key={index}>
                    <Skeleton className=" w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]  bg-gray-200" />

                  </div>
                ))}
            </div>

            

            </div>

           

            <Skeleton className="   w-full h-[38px]  bg-gray-200" />       
            






            

            

          </div>
      </div>
      </>
  );
};

export default ProductPageSkeleton;