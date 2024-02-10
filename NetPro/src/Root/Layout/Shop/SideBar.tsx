import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { convertToTitleCase, extractCategoryFromUrl } from "@/utils";
import { categoryLinksMap, categorySizeMap } from "@/constants";

const SideBar: React.FC = () => {
  const location = useLocation();
  const currentCategory = extractCategoryFromUrl(location.pathname);
  const [currentSize, setCurrentSize] = useState(0);

  const getCategoryLinks = (categoryLinks: any[]) => {
    return categoryLinks.map((link, index) => (
      <li key={index} className="hover:underline">
        <Link to={link.route}>{link.label}</Link>
      </li>
    ));
  };

  const getCategorySizes = (categorySizes: any) => {
    return categorySizes.map((number:any, index:number) => (
      <div
      onClick={() => setCurrentSize(number)}
      className={
        number === currentSize
          ? "flex flex-col  font-medium  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80  w-1/5 h-[40px] m-1 bg-gray-800"
          : "flex flex-col  font-medium  border-[1.5px] items-center rounded-sm justify-center border-gray-700 border-opacity-80   w-1/5 m-1  h-[40px] cursor-pointer hover:bg-gray-100 transition "
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
    <div className="w-[270px] px-7 py-7 hidden md:flex flex-col">
      <h1 className="font-semibold">Home /</h1>
      <p className="capitalize text-[28px] font-bold my-5">{convertToTitleCase(location.pathname)}</p>
      <ul className="flex flex-col gap-2 font-medium">
        {currentCategory && categoryLinksMap[currentCategory] && getCategoryLinks(categoryLinksMap[currentCategory])}
      </ul>

      <div className="flex flex-col my-7 text-[18px] font-semibold">
        <h1>Filter By:</h1>
        <hr className="my-2" />
      </div>

      <div className="flex flex-col mb-7 ">
        <h1 className="text-[18px] font-semibold">SIZES</h1>
        <div className="flex  flex-wrap my-4   ">
            {currentCategory && categorySizeMap[currentCategory] && getCategorySizes(categorySizeMap[currentCategory])}
            </div>
            <hr className="my-2" />

      </div>



    </div>
  );
};

export default SideBar;
