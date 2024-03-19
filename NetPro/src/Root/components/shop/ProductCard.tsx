import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { scrollToTop } from '@/utils';
const ProductCard = ({ product, simple = false }: { product: any; simple: boolean }) => {
  const [currentColor, setCurrentColor] = useState(0)

  useEffect(() => {
    setCurrentColor(0)
  }, [product])

  let image = product?.imagesColor1[0]

  if (currentColor === 0) {
    image = product?.imagesColor1[0]
  } else if (currentColor === 1) {
    image = product?.imagesColor2[0]
  } else if (currentColor === 2) {
    image = product?.imagesColor3[0]
  } else if (currentColor === 3) {
    image = product?.imagesColor4[0]
  } else if (currentColor === 4) {
    image = product?.imagesColor5[0]
  }

  const mapColors = product?.colors.map((color: any, index: number) => (
    <img
      key={index}
      src={
        index === 0? 
        product?.imagesColor1[0]
          : index === 1?
           product?.imagesColor2[0]
          : index === 2
          ? product?.imagesColor3[0]
          : index === 3
          ? product?.imagesColor4[0]
          : index === 4?
          product?.imagesColor5[0]:
          ""

      }
      className={
        index === currentColor
          ? 'w-[35px] md:w-[45px] object-cover border-2 border-gray-600 border-opacity-80'
          : 'w-[35px] md:w-[45px] object-cover cursor-pointer border-2 hover:border-gray-600 hover:border-opacity-30 transform'
      }
      onClick={() => setCurrentColor(index)}
    />
  ))

  const [showMapImages, setShowMapImages] = useState(false)

  return (
    <div className={simple ? 'flex flex-col' : 'flex flex-col w-1/2 lg:w-1/3 md:p-4 p-2 transition'}>
      <div
        className="hover:border-[1px] border-gray-600 border-opacity-55 flex flex-col p-1 cursor-pointer"
        onMouseEnter={() => setShowMapImages(true)}
        onMouseLeave={() => setShowMapImages(false)}
      >
        <Link to={`/collections/${product?.category}/${product?.$id}`} onClick={scrollToTop}>
          <div className="relative overflow-hidden">
            <img src={image || ''} alt={product?.productName} className="object-cover hover:scale-110 transition" />
            {!simple && product?.tag && (
              <p className="absolute text-[10px] sm:text-[14px] capitalize bottom-0 left-0  m-1 sm:m-2 md:m-3 px-2 sm:px-3 py-[1px] sm:py-[2px] bg-white bg-opacity-40 font-medium italic">
                {product.tag}
              </p>
            )}
          </div>
          <div className={simple ? '  flex justify-between w-full' : ' flex flex-col'}>
          { !simple && <h1 className="font-semibold mt-2 w-full">{product?.productName}</h1>}

            <div className="w-full flex justify-between ">
           { simple && <h1 className="font-semibold my-2 w-full">{product?.productName}</h1>}
              <p className={simple ? 'font-medium my-auto  text-gray-600' : 'font-medium my-1 text-gray-600'}>
                ${product?.price}
              </p>
              {!simple && product.colors.length > 1 && (
                <p className="md:text-[14px] md:block hidden my-auto pr-1 text-gray-500 font-medium">
                  {product?.colors?.length} Colors Available
                </p>
              )}
            </div>
          </div>
        </Link>
        {!simple && (
          <div className={`flex gap-2 overflow-x-scroll pb-2 custom-scrollbar ${showMapImages ? 'opacity-100' : 'opacity-0'}`}>
            {mapColors}
          </div>
        )}
      </div>
    </div>
  )
}



export default ProductCard