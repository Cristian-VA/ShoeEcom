import { Link } from "react-router-dom";

const ProductGrid = ({ data }: { data: any }) => {
  return (
    <div>
      {data?.documents?.map((product: any, index: number) => (
        // Added a unique key for each link
        <Link to="/" key={index}>
          <h1>{product.productName}</h1>
          <img src={product.imagesColor2[0]} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;