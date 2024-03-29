import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGrid = ({
  data,
  isRefetching,
  noPag = false,
}: {
  data: any;
  isRefetching: boolean;
  noPag?: boolean;
}) => {
  const [currentPage, setcurrentPage] = useState(1);

  let pageData = data?.Page1;
  const pages =
    data?.Page2?.documents?.length > 0 ? Object.keys(data) : ["Page1"];

  if (currentPage === 2) {
    pageData = data?.Page2;
  }

  useEffect(() => {
    setcurrentPage(1);
  }, [data]);

  return (
    <>
      {isRefetching ? (
        <>
        {noPag && <div className="flex flex-wrap">
          <ProductCardSkeleton fourInline={true} />
          <ProductCardSkeleton fourInline={true}/>
          <ProductCardSkeleton fourInline={true}/>
          <ProductCardSkeleton fourInline={true}/>
          <ProductCardSkeleton fourInline={true}/>
          <ProductCardSkeleton fourInline={true}/>
          <ProductCardSkeleton fourInline={true}/>
          <ProductCardSkeleton fourInline={true}/>
          
        </div>}

        {!noPag && <div className="flex flex-wrap">
          <ProductCardSkeleton/>
          <ProductCardSkeleton/>
          <ProductCardSkeleton/>
          <ProductCardSkeleton/>
          <ProductCardSkeleton/>
          <ProductCardSkeleton/>
          <ProductCardSkeleton/>
          <ProductCardSkeleton/>
          
        </div>}
        </>
      ) : (
        <div className="w-full flex flex-col gap-6 md:gap-10 min-h-[700px] md:min-h-[950px] justify-between">
          <div className="flex flex-wrap  items-start justify-start  ">
            {!noPag &&
              pageData?.documents?.map((product: any, index: number) => (
                <ProductCard product={product} key={index} simple={false} />
              ))}

            {noPag &&
              data?.documents?.map((product: any, index: number) => (
                <ProductCard product={product} key={index} simple={false}  fourInline={true}/>
              ))}
          </div>
          {!noPag && <div className="  w-full flex justify-center py-6 items-end ">
            {pages.map((page, index) => (
              <div
                key={page}
                onClick={() => setcurrentPage(index + 1)}
                className={
                  currentPage === index + 1
                    ? "flex flex-col font-medium text-white  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80  w-[40px] h-[40px] m-1 transition bg-gray-800"
                    : "flex flex-col cursor-pointer  font-medium  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80  w-[40px] h-[40px] m-1 transition hover:bg-gray-100"
                }
              >
                <h1 className="bg-transparent text-inherit">{index + 1}</h1>
              </div>
            ))}
          </div>}
        </div>
      )}
    </>
  );
};

export default ProductGrid;
