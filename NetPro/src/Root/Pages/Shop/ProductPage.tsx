import {useState} from 'react'
import { useParams } from "react-router-dom"
import { useGetMenProductId } from '@/lib/queries/queries&mutations';
const ProductPage = () => {
  const { id } = useParams();
  const { data: product } = useGetMenProductId(id || "");
  const [currentImage, setCurrentImage] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);

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

  return (
    <>
      <div className='container my-6 flex flex-col lg:flex-row  md:gap-8 gap-4'>
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
              <p className='bg-gray-100 my-auto font-medium px-2 italic'> Free Shipping</p>
            </div>

            <div className='md:my-10 my-6'>

              <h1 className='mb-2 text-[20px] font-medium uppercase'> Available colors:</h1>
              
            <div className='flex gap-4 md:gap-6 max-h-[400px]  '>
              
                {product?.colors?.map((color:string, index:number) => (
                  <div className='flex flex-col gap-2 font-medium  flex-wrap justify-between' key={index}>
                    <img src={index === 0? product?.imagesColor1[0]: index === 1 ?  product?.imagesColor2[0] : index === 2 ?  product?.imagesColor3[0] : index === 3 ? product?.imagesColor4[0] : product?.imagesColor5[0] } alt={color}
                    className={index === currentColor? 'w-[80px] h-[80px] object-cover border-b-4 border-gray-600 border-opacity-80 ' : "w-[80px] h-[80px] object-cover cursor-pointer border-b-4 hover:border-gray-600 hover:border-opacity-30 transform"}
                    onClick={() => setCurrentColor(index)}/>
                  </div>
                ))}
            </div>
                <p className='capitalize text-[18px] mt-2'>{product?.colors[currentColor]}</p>

            </div>

          </div>
      </div>
      </>
  );
};

export default ProductPage;