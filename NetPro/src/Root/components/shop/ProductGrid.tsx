import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductGrid = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-wrap  ">
      {data?.documents?.map((product: any, index: number) => (
        // Added a unique key for each link
       <ProductCard product={product} key={index}/>
      ))}
    </div>
  );
};

export default ProductGrid;