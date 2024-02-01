
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from 'react'


 

const ProductCard = ({product }:{product:any }) => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const mapImages= product?.imagesColor1?.map((image:string, index:number) => (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4" key={index}>
      <img src={image} alt={product.productName} className={ currentImage === index?'object-cover cursor-pointer border-2 border-gray-600 border-opacity-55' : 'object-cover cursor-pointer'} onClick={() => setCurrentImage(index)}/>
    </CarouselItem>
  ))



 

  return (
   
    <div className='  flex flex-col w-1/2 lg:w-1/3 md:p-4 p-2  '>
    <Link to={`/collections/men-sneakers/${product?.$id}`}  >

          <div className=' relative'>
          <img src={product.imagesColor1[currentImage]} alt={product.productName} className=' object-cover ' />
          <p className='absolute bottom-0 left-0 m-3 px-4 py-1 bg-white bg-opacity-40 font-medium italic'>{product.tag}</p>
          </div>
          <h1 className='font-semibold my-1  '>{product.productName}</h1>
          <p className='font-medium my-1 text-gray-600'>${product.price}</p>

         
          
        </Link>
         <Carousel className='lg:block mx-auto w-full minus-64px hidden ' >
         <CarouselContent>
           {mapImages}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
       </Carousel>
      <div className='flex'>


        
    
      </div>
       
       </div>
      
   
  )
}

export default ProductCard