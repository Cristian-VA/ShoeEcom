import { useLocation,  } from "react-router-dom";
import {  extractCategoryFromUrl } from "@/utils";
import {
  categorySizeMap,
  categoryBestForMap,
  sortBy,
} from "@/constants";
import { useFilterContext } from "@/Context/FilterContext";
import { useEffect, useState } from "react";


const FilterUi = () => {
  const location = useLocation();
  const currentCategory = extractCategoryFromUrl(location.pathname);
  const { filters, setFilters } = useFilterContext();
  const [prevCategory, setPrevCategory] = useState('')
  const isWomenBags = currentCategory.startsWith("women-bags")
  const isMenBackpacks = currentCategory.startsWith("men-backpacks")
  const isWaterBottleCategory = currentCategory.endsWith("bottles")

  


  useEffect(() => {
    if (currentCategory !== prevCategory) {
      
      setFilters({
        bestFor:null,
        currentSize: [],
        currentSort: null,
      })
      setPrevCategory(currentCategory);
    }
  }, [currentCategory, prevCategory]);

 
  

  const getCategoryBestFor = (categoryBestFor: any) => {
    return categoryBestFor.map((category: any, index: number) => (
      <div key={index} className="flex gap-2">
        <div
          className={
            category.bestFor === filters.bestFor
              ? "bg-gray-800 h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 "
              : "h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 transition hover:bg-gray-100 cursor-pointer "
          }
          onClick={() =>  setFilters((prevFilters:any) => ({ ...prevFilters, bestFor:category.bestFor }))}
        ></div>
        <h1 className="capitalize my-auto font-medium">{category.label}</h1>
      </div>
    ));
  };
  const sortByMap = sortBy.map((sort: any, index) => {
    return (
      <div key={index} className="flex gap-2 ">
        <div
          className={
            sort.key === filters.currentSort
              ? "bg-gray-800 h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 "
              : "h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 transition hover:bg-gray-100 cursor-pointer "
          }
          onClick={() => setFilters((prevFilters:any) => ({ ...prevFilters, currentSort: sort.key }))}
        ></div>
        <h1 className="capitalize my-auto font-medium ">{sort.label}</h1>
      </div>
    );
  });

  const getCategorySizes = (categorySizes: any) => {
    return categorySizes.map((number: any, index: number) => (
      <div
        onClick={filters.currentSize?.includes(number)? () => {} :() => setFilters((prevFilters:any) => ({
          ...prevFilters,
          currentSize: [...prevFilters.currentSize, number], // Push new value to array
        }))}
        className={
          filters.currentSize?.includes(number)
            ? "flex flex-col  font-medium  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80  min-w-[20%] h-[40px] m-1 px-1 bg-gray-800"
            : "flex flex-col  font-medium  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80  min-w-[20%] m-1 px-1  h-[40px] cursor-pointer hover:bg-gray-100 transition  "
        }
        key={index}
      >
        <p
          className={
            filters.currentSize?.includes(number)
              ? "text-[12px]  bg-transparent text-white"
              : "text-[12px] bg-transparent "
          }
        >
          {" "}
          {number}{" "}
        </p>
      </div>
    ));
  };
  const handleRemoveSize = (sizeToRemove: string) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      currentSize: prevFilters.currentSize.filter((size: string) => size !== sizeToRemove),
    }));
  };




  return (
    <div className="overflow-scroll custom-scrollbar px-6 lg:px-0 w-full">
      <div className="flex flex-col mt-6 ">
        <h1 className="text-[18px] font-semibold">SORT BY:</h1>
        <div className="flex  flex-col mt-4 gap-2   ">{sortByMap}</div>
        <hr className="mt-6" />
      </div>

      <div className="flex flex-col my-6 text-[18px] font-semibold">
        <div className="flex w-full justify-between ">
        <h1 className="mt-auto">FILTER BY:</h1>
        {<p className="text-[14px] font-medium mt-auto transition hover:underline cursor-pointer" onClick={() => setFilters({
      bestFor: null,
      currentSize: [],
      currentSort:null
    })}>Clear All</p>}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.bestFor && (
            <div
              onClick={() => setFilters((prevFilters:any) => ({...prevFilters, bestFor:null }) )}
              className="  bg-gray-700 text-[14px]  flex justify-end pl-2 pr-2 py-1 rounded-[4px] hover:opacity-70 transition cursor-pointer "
            >
              <h1 className="text-white bg-transparent capitalize my-auto">
                {filters.bestFor}{" "}
              </h1>
              <p className="ml-4 bg-transparent text-white my-auto">x</p>
            </div>
          )}

           {filters.currentSize?.map((size) => {
            return (
              <div
              onClick={() => handleRemoveSize(size)}
              className="  bg-gray-700 text-[14px]  flex justify-end pl-2 pr-2 py-1 rounded-[4px] hover:opacity-70 transition cursor-pointer "
            >
              <h1 className="text-white bg-transparent capitalize my-auto">
              {size}
              </h1>
              <p className="ml-4 bg-transparent text-white my-auto">x</p>
            </div>
            )
           })}
        </div>
        <hr className="my-2" />
      </div>

      <div className="flex flex-col mb-6 ">
        <h1 className="text-[18px] font-semibold">SIZES</h1>
        <div className="flex  flex-wrap my-4    ">
          {currentCategory &&
            categorySizeMap[currentCategory] &&
            getCategorySizes(categorySizeMap[currentCategory])}
        </div>
        <hr className="my-2" />
      </div>

      {!isMenBackpacks && !isWomenBags && !isWaterBottleCategory && (
  <div className="flex flex-col mb-7">
    <h1 className="text-[18px] font-semibold">BEST FOR</h1>
    <div className="flex flex-col my-4 gap-2">
      {currentCategory &&
        categoryBestForMap[currentCategory] &&
        getCategoryBestFor(categoryBestForMap[currentCategory])}
    </div>
    <hr className="my-2" />
  </div>
)}
    </div>
  );
};

export default FilterUi;
