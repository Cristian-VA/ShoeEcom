
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGrid = ({ data, isRefetching,  }: { data: any, isRefetching:boolean,  }) => {
  return (
    <>

    {isRefetching? (
      <div className="flex flex-wrap">
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>
        <ProductCardSkeleton/>

      </div>
    ) :(
    <div className="flex flex-wrap  ">
      
      {data?.documents?.map((product: any, index: number) => (
        // Added a unique key for each link
       <ProductCard product={product} key={index} simple={false} />
      ))}
    </div>
      )}
    </>
  );
};

export default ProductGrid;