import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { categorySizeMap } from "@/constants";
import { Button } from "@/components/ui/button";
import ProductCard from "@/Root/components/shop/ProductCard";
import ProductPageSkeleton from "@/Root/components/shop/ProductPageSkeleton";
import DetailsAccordeon from "@/Root/components/shop/DetailsAccordeon";
import { Link } from "react-router-dom";
import { extractCategoryFromProductPage } from "@/utils";
import { useDynamicProductFetching } from "@/utils";
import useCart from "@/lib/zustand/cart";
import PopUpModal from "@/Root/Layout/Shop/PopUpModal";
import CheckOut from "@/Root/components/shop/CheckOut";
import ProductSlider from "@/Root/components/shop/ProductSlider";
import useSeenProducts from "@/lib/zustand/seenProducts";

const ProductPage = () => {
  const { id, category } = useParams();
  const location = useLocation()
  const currentCategory:any = extractCategoryFromProductPage(location.pathname)
  const addToCart = useCart((state:any) => state.addToCart)
  const { product, isLoading, isFetched, relatedProducts } = useDynamicProductFetching(id || "", category || "");
  const [currentImage, setCurrentImage] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);
  const [openModal, setOpenModal] = useState(false)
  const products = useSeenProducts((state:any) => state.products)
  const addtolist = useSeenProducts((state:any) => state.addProduct)
 

  useEffect(() => {
    if (product){
      addtolist({product})
    }
    
  }, [product])

 
  



  const [isDisabled, setIsDisabled] = useState(true);




  useEffect(() => {
    if (currentSize) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [currentSize]);

  useEffect(() => {
    setCurrentColor(0);
    setCurrentImage(0);
  }, [id]);

  let mapImages = null;
  let image = product?.imagesColor1[currentImage];

  if (currentColor === 0) {
    mapImages = product?.imagesColor1?.map((image: string, index: number) => (
      <div className="max-w-[80px] w-full" key={index}>
        <img
          src={image}
          alt={product.productName}
          className={
            currentImage === index
              ? "object-cover cursor-pointer border-2 border-gray-600 border-opacity-55"
              : "object-cover cursor-pointer border-2"
          }
          onClick={() => setCurrentImage(index)}
        />
      </div>
    ));
    image = product?.imagesColor1[currentImage];
  } else if (currentColor === 1) {
    mapImages = product?.imagesColor2?.map((image: string, index: number) => (
      <div className="max-w-[80px] w-full" key={index}>
        <img
          src={image}
          alt={product.productName}
          className={
            currentImage === index
              ? "object-cover cursor-pointer border-2 border-gray-600 border-opacity-55"
              : "object-cover cursor-pointer border-2"
          }
          onClick={() => setCurrentImage(index)}
        />
      </div>
    ));
    image = product?.imagesColor2[currentImage];
  } else if (currentColor === 2) {
    mapImages = product?.imagesColor3?.map((image: string, index: number) => (
      <div className="max-w-[80px] w-full" key={index}>
        <img
          src={image}
          alt={product.productName}
          className={
            currentImage === index
              ? "object-cover cursor-pointer border-2 border-gray-600 border-opacity-55"
              : "object-cover cursor-pointer border-2"
          }
          onClick={() => setCurrentImage(index)}
        />
      </div>
    ));
    image = product?.imagesColor3[currentImage];
  } else if (currentColor === 3) {
    mapImages = product?.imagesColor4?.map((image: string, index: number) => (
      <div className="max-w-[80px] w-full" key={index}>
        <img
          src={image}
          alt={product.productName}
          className={
            currentImage === index
              ? "object-cover cursor-pointer border-2 border-gray-600 border-opacity-55"
              : "object-cover cursor-pointer border-2"
          }
          onClick={() => setCurrentImage(index)}
        />
      </div>
    ));
    image = product?.imagesColor4[currentImage];
  } else if (currentColor === 4) {
    mapImages = product?.imagesColor5?.map((image: string, index: number) => (
      <div className="max-w-[80px] w-full" key={index}>
        <img
          src={image}
          alt={product.productName}
          className={
            currentImage === index
              ? "object-cover cursor-pointer border-2 border-gray-600 border-opacity-55"
              : "object-cover cursor-pointer border-2"
          }
          onClick={() => setCurrentImage(index)}
        />
      </div>
    ));
    image = product?.imagesColor5[currentImage];
  }

  const getCategorySizes = (categorySizes: any) => {
   
    return categorySizes.map((number:any, index:number) =>{ 
      const isAvailable = product?.availableSizes.includes(number);
     
   
     
      return (
      <div
      onClick={isAvailable? () => setCurrentSize(number) : () => {}  }
      className={
        number === currentSize
          ? "flex flex-col  font-medium  border-2 items-center justify-center border-gray-700 border-opacity-55 min-w-[40px] px-2 h-[40px] sm:min-w-[60px] sm:min-h-[60px] bg-gray-800"
          : isAvailable? "flex flex-col  font-medium  border-2 items-center justify-center border-gray-700 border-opacity-55 px-2 min-w-[40px] h-[40px] sm:min-w-[60px] sm:min-h-[60px] cursor-pointer hover:bg-gray-100 transition " :
          "line-through flex flex-col  font-medium  border-2 items-center justify-center border-gray-700 border-opacity-55 px-2 min-w-[40px] h-[40px] sm:min-w-[60px] sm:h-[60px] opacity-20 hover:bg-gray-100 transition" 
      }
      key={index}
    >
      <p
        className={
          number === currentSize
            ? "text-[12px] sm:text-[16px] bg-transparent text-white"
            : "text-[12px] sm:text-[16px] bg-transparent "
        }
      >
        {" "}
        {number}{" "}
      </p>
    </div>
  )});
  };
  const newItem = {
    productName: product?.productName,
    image: image,
    price: product?.price,
    size: currentSize,
    color: product?.colors[currentColor]
    
  }
  const handleAddtoCart = () =>{
    
    addToCart({newItem})
    setOpenModal(true)
   
  }

  const reversedproducts = products.reverse()

  



  if (isLoading) return <ProductPageSkeleton />;

  return (
    <>
      <div className="container my-6 flex flex-col lg:flex-row  md:gap-8 gap-4  ">
        <div className="flex md:gap-8 gap-4 sm:flex-row flex-col max-h-[550px] max-w-[750px] w-full  ">
          <div className="flex sm:flex-col gap-2 min-w-[50px] ">
            {mapImages}
          </div>
          <div className="w-full">
            <img
              src={image}
              alt="product"
              className="object-cover h-full w-full overflow-hidden"
            />

            <div className="w-full lg:flex flex-col hidden">
              <DetailsAccordeon
                description={product?.description}
                imgUrl={product?.imagesColor1[3]}
                details={product?.details}

              />
              
            
            </div>
            
          </div>
         
        </div>

        <div className="  ">
          <Link to={`/collections/${product?.category} ` }>
          <p className="capitalize font-medium hover:underline">
            Home/Collections/{product?.category}
          </p>
          </Link>
          <h1 className="capitalize md:text-[36px] font-bold text-[28px] my-2">
            {product?.productName}
          </h1>
          <div className="flex gap-6">
            <p className="text-[20px]">${product?.price}</p>
            {product?.price >= 100 && (
              <p className="bg-gray-100 my-auto font-medium px-2 italic">
                {" "}
                Free Shipping
              </p>
            )}
          </div>

          <div className="md:my-10 my-6">
            <h1 className="mb-2 text-[20px] font-medium uppercase">
              {" "}
              Available colors:
            </h1>

            <div className="flex gap-4 md:gap-6 flex-wrap  ">
              {product?.colors?.map((color: string, index: number) => (
                <div
                  className="flex flex-col gap-2 font-medium  flex-wrap justify-between"
                  key={index}
                >
                  <img
                    src={
                      index === 0
                        ? product?.imagesColor1[0]
                        : index === 1
                        ? product?.imagesColor2[0]
                        : index === 2
                        ? product?.imagesColor3[0]
                        : index === 3
                       
                        
                    }
                    alt={color}
                    className={
                      index === currentColor
                        ? "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover border-b-4 border-gray-600 border-opacity-80 "
                        : "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover cursor-pointer border-b-4 hover:border-gray-600 hover:border-opacity-30 transform"
                    }
                    onClick={() => setCurrentColor(index)}
                  />
                </div>
              ))}
            </div>
            <p className="capitalize text-[18px] mt-2">
              {product?.colors[currentColor]}
            </p>
          </div>

          <div className="md:my-10 my-6">
            <h1 className="mb-2 text-[20px] font-medium uppercase">
              {" "}
              Select Size:
            </h1>

            <div className="flex gap-2 flex-wrap   ">
            {currentCategory && categorySizeMap[currentCategory] && getCategorySizes(categorySizeMap[currentCategory])}
            </div>
          </div>

          <div className=" flex flex-col gap-2 ">
            <Button disabled={isDisabled} onClick={handleAddtoCart} className="btn-black w-full">
              {isDisabled ? "PLEASE SELECT A SIZE" : "ADD TO CART"}
            </Button>
            <p className="text-center text-medium text-[14px]">
              Free shipping on orders over $100. Returns are free of charge.
            </p>
          </div>

          <div className="w-full flex flex-col lg:hidden my-3">
          <DetailsAccordeon
                description={product?.description}
                imgUrl={product?.imagesColor1[3]}
                details={product?.details}

              />
          </div>

          {isFetched && (
            <div className="flex flex-col mt-6">
              <h1 className="uppercase md:text-[22px] font-semibold text-[18px] my-2">
                {" "}
                Related Products
              </h1>
              <div className="flex gap-4  max-w-[600px]   ">
                <ProductCard
                  simple={true}
                  product={relatedProducts?.documents[0]}
                />
                <ProductCard
                  simple={true}
                  product={relatedProducts?.documents[1]}
                />
              </div>
            
            </div>
          )}
        
        </div>
      </div>
      <div className="container">
      <ProductSlider title="RECENTLY VIEWED PRODUCTS" products={products}/>
      </div>



      <PopUpModal open={openModal}  setOpen={setOpenModal}>
        <CheckOut product={newItem} setOpen={setOpenModal}/>
      </PopUpModal>

     


      

     
    </>
  );
};

export default ProductPage;
