import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";
import { convertToTitleCase, extractCategoryFromUrl } from "@/utils";
import {
  categoryLinksMap,
  categorySizeMap,
  categoryBestForMap,
  sortBy,
} from "@/constants";

const FilterUi = () => {
  const location = useLocation();
  const currentCategory = extractCategoryFromUrl(location.pathname);
  const [currentSize, setCurrentSize] = useState(null);
  const [bestFor, setBestFor] = useState(null);
  const [currentSort, setCurrentSort] = useState(null);
  useEffect(() => {
    setBestFor(null);
    setCurrentSize(null);
  }, [location]);

  const filters = {
    size: currentSize,
    bestFor: bestFor,
    sort: currentSort,
  };

  console.log(filters)

  const getCategoryBestFor = (categoryBestFor: any) => {
    return categoryBestFor.map((category: any, index: number) => (
      <div key={index} className="flex gap-2">
        <div
          className={
            category.bestFor === bestFor
              ? "bg-gray-800 h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 "
              : "h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 transition hover:bg-gray-100 cursor-pointer "
          }
          onClick={() => setBestFor(category.bestFor)}
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
            sort.label === currentSort
              ? "bg-gray-800 h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 "
              : "h-[24px] w-[24px] border-[1.5px] items-center rounded-[4px] justify-center border-gray-700 border-opacity-80 transition hover:bg-gray-100 cursor-pointer "
          }
          onClick={() => setCurrentSort(sort.label)}
        ></div>
        <h1 className="capitalize my-auto font-medium ">{sort.label}</h1>
      </div>
    );
  });

  const getCategorySizes = (categorySizes: any) => {
    return categorySizes.map((number: any, index: number) => (
      <div
        onClick={() => setCurrentSize(number)}
        className={
          number === currentSize
            ? "flex flex-col  font-medium  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80  w-1/5 h-[40px] m-1 bg-gray-800"
            : "flex flex-col  font-medium  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80   w-1/5 m-1  h-[40px] cursor-pointer hover:bg-gray-100 transition  "
        }
        key={index}
      >
        <p
          className={
            number === currentSize
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

  return (
    <div className="overflow-scroll custom-scrollbar px-6 lg:px-0 w-full">
      <div className="flex flex-col mt-6 ">
        <h1 className="text-[18px] font-semibold">SORT BY:</h1>
        <div className="flex  flex-col mt-4 gap-2   ">{sortByMap}</div>
        <hr className="mt-6" />
      </div>

      <div className="flex flex-col my-6 text-[18px] font-semibold">
        <h1>FILTER BY:</h1>
        <div className="flex flex-wrap gap-2 mt-4">
          {bestFor && (
            <div
              onClick={() => setBestFor(null)}
              className="  bg-gray-700 text-[14px]  flex justify-end pl-2 pr-2 py-1 rounded-[4px] hover:opacity-70 transition cursor-pointer "
            >
              <h1 className="text-white bg-transparent capitalize my-auto">
                {bestFor}{" "}
              </h1>
              <p className="ml-4 bg-transparent text-white my-auto">x</p>
            </div>
          )}

          {currentSize && (
            <div
              onClick={() => setCurrentSize(null)}
              className="  bg-gray-700 text-[14px]  rounded-[4px] flex justify-end pl-2 pr-2 py-1  hover:opacity-70 transition cursor-pointer "
            >
              <h1 className="text-white bg-transparent capitalize my-auto">
                {currentSize}{" "}
              </h1>
              <p className="ml-4 bg-transparent text-white my-auto">x</p>
            </div>
          )}
        </div>
        <hr className="my-2" />
      </div>

      <div className="flex flex-col mb-6 ">
        <h1 className="text-[18px] font-semibold">SIZES</h1>
        <div className="flex  flex-wrap my-4   ">
          {currentCategory &&
            categorySizeMap[currentCategory] &&
            getCategorySizes(categorySizeMap[currentCategory])}
        </div>
        <hr className="my-2" />
      </div>

      <div className="flex flex-col mb-7  ">
        <h1 className="text-[18px] font-semibold">BEST FOR</h1>
        <div className="flex  flex-col my-4 gap-2   ">
          {currentCategory &&
            categoryBestForMap[currentCategory] &&
            getCategoryBestFor(categoryBestForMap[currentCategory])}
        </div>
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default FilterUi;
