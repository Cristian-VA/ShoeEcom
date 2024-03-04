import ProductCard from './ProductCard';

const ProductSlider = ({ title, products }: { title: string; products: any }) => {
  const mapProducts = products?.map((product: any, index: number) => (
    <div className="md:w-[25%] w-[50%] flex-shrink-0" key={index}> 
      <ProductCard simple product={product} />
    </div>
  ));

  return (
    <div className="w-full max-w-screen flex flex-col my-6">
      <h1 className="uppercase md:text-[26px] font-semibold text-[18px] my-2">
        {title} ({products?.length})
      </h1>
      <div className="overflow-x-auto   flex w-full custom-scrollbar1 gap-4 whitespace-nowrap pb-2">
        {mapProducts}
      </div>
    </div>
  );
};

export default ProductSlider;