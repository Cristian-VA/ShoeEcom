import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useGetMenProductId } from '@/lib/queries/queries&mutations';
import { shoeSizes } from '@/constants';
import { Button } from '@/components/ui/button';
import ProductPageSkeleton from '@/Root/components/shop/ProductPageSkeleton';
import Loader from '@/Root/components/Loader';
const ProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetMenProductId(id || "");
  const [currentImage, setCurrentImage] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [currentSize, setCurrentSize] = useState(0)

  const [isDisabled, setIsDisabled] = useState(true)
  
  useEffect(() => {
   
    if (currentSize) {
      setIsDisabled(false); 
    } else {
      setIsDisabled(true); 
    }
  }, [currentSize])
  

  let mapImages = null;
  let image = product?.imagesColor1[currentImage]
  
  if (currentColor === 0) {
      mapImages =  product?.imagesColor1?.map((image:string, index:number) => (
          <div className="max-w-[80px] w-full" key={index}>
              <img src={image} alt={product.productName} className={ currentImage === index ? 'object-cover cursor-pointer border-2 border-gray-600 border-opacity-55' : 'object-cover cursor-pointer border-2'} onClick={() => setCurrentImage(index)}/>
          </div>
      ));
      image = product?.imagesColor1[currentImage]
  } else if (currentColor === 1) {
      mapImages =  product?.imagesColor2?.map((image:string, index:number) => (
          <div className="max-w-[80px] w-full" key={index}>
              <img src={image} alt={product.productName} className={ currentImage === index ? 'object-cover cursor-pointer border-2 border-gray-600 border-opacity-55' : 'object-cover cursor-pointer border-2'} onClick={() => setCurrentImage(index)}/>
          </div>
      ))
      image = product?.imagesColor2[currentImage]
  } else if (currentColor === 2) {
      mapImages =  product?.imagesColor3?.map((image:string, index:number) => (
          <div className="max-w-[80px] w-full" key={index}>
              <img src={image} alt={product.productName} className={ currentImage === index ? 'object-cover cursor-pointer border-2 border-gray-600 border-opacity-55' : 'object-cover cursor-pointer border-2'} onClick={() => setCurrentImage(index)}/>
          </div>
      ));
      image = product?.imagesColor3[currentImage]
  } else if (currentColor === 3) {
      mapImages =  product?.imagesColor4?.map((image:string, index:number) => (
          <div className="max-w-[80px] w-full" key={index}>
              <img src={image} alt={product.productName} className={ currentImage === index ? 'object-cover cursor-pointer border-2 border-gray-600 border-opacity-55' : 'object-cover cursor-pointer border-2'} onClick={() => setCurrentImage(index)}/>
          </div>
      ));
      image = product?.imagesColor4[currentImage]
  } else if (currentColor === 4) {
      mapImages =  product?.imagesColor5?.map((image:string, index:number) => (
        <div className="max-w-[80px] w-full" key={index}>
            <img src={image} alt={product.productName} className={ currentImage === index ? 'object-cover cursor-pointer border-2 border-gray-600 border-opacity-55' : 'object-cover cursor-pointer border-2'} onClick={() => setCurrentImage(index)}/>
        </div>

  ));
  image = product?.imagesColor5[currentImage]
  }
  if (isLoading) return <Loader/>
  if (!product?.productName) return <ProductPageSkeleton/>



  return (
    <>
      <div className='container my-6 flex flex-col lg:flex-row  md:gap-8 gap-4 '>
        <div className='flex md:gap-8 gap-4 sm:flex-row flex-col max-h-[550px] max-w-[750px] w-full border-2 '>
          <div className='flex sm:flex-col gap-2 min-w-[50px] '>
              {mapImages}
          </div>
          <img src={image} alt="product" className='object-cover h-full w-full overflow-hidden' />
          </div>

          <div className='  '>
            <p className='capitalize font-medium'>Home/Collections/{product?.users}'s {product?.category}</p>
            <h1 className='capitalize md:text-[36px] font-bold text-[28px] my-2'>{product?.users}'s {product?.productName}</h1>
            <div className='flex gap-6'>
              <p className='text-[20px]'>${product?.price}</p>
             {product?.price >= 70 && <p className='bg-gray-100 my-auto font-medium px-2 italic'> Free Shipping</p> }
            </div>

            <div className='md:my-10 my-6'>

              <h1 className='mb-2 text-[20px] font-medium uppercase'> Available colors:</h1>
              
            <div className='flex gap-4 md:gap-6 flex-wrap  '>
              
                {product?.colors?.map((color:string, index:number) => (
                  <div className='flex flex-col gap-2 font-medium  flex-wrap justify-between' key={index}>
                    <img src={index === 0? product?.imagesColor1[0]: index === 1 ?  product?.imagesColor2[0] : index === 2 ?  product?.imagesColor3[0] : index === 3 ? product?.imagesColor4[0] : product?.imagesColor5[0] } alt={color}
                    className={index === currentColor? 'w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover border-b-4 border-gray-600 border-opacity-80 ' : "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover cursor-pointer border-b-4 hover:border-gray-600 hover:border-opacity-30 transform"}
                    onClick={() => setCurrentColor(index)}/>
                  </div>
                ))}
            </div>
                <p className='capitalize text-[18px] mt-2'>{product?.colors[currentColor]}</p>

            </div>


            <div className='md:my-10 my-6'>

              <h1 className='mb-2 text-[20px] font-medium uppercase'> Select Size:</h1>
              
            <div className='flex gap-2 flex-wrap   '>
              
                {shoeSizes.map((number:number, index:number) => (
                  <div onClick={() => setCurrentSize(number)} className={number === currentSize ? 'flex flex-col  font-medium  border-2 items-center justify-center border-gray-700 border-opacity-55 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] bg-gray-800': "flex flex-col  font-medium  border-2 items-center justify-center border-gray-700 border-opacity-55 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] cursor-pointer hover:bg-gray-100 transition "} key={index}>
                    <p className={number === currentSize? 'text-[12px] sm:text-[16px] bg-transparent text-white': "text-[12px] sm:text-[16px] bg-transparent "}> {number} </p>
                  </div>
                ))}
            </div>

            

            </div>

            <div className=' flex flex-col gap-2'>

            <Button disabled={isDisabled} className='btn-black w-full'>
                {isDisabled? "PLEASE SELECT A SIZE" : "ADD TO CART"}
            </Button>
                    <p className='text-center text-medium text-[14px]'>Free shipping on orders over $70. Returns are free of charge.</p>
            </div>






            

            

          </div>
      </div>
      </>
  );
};

export default ProductPage;