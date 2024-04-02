import React from "react";
import FilterUi from "../../components/shop/FilterUi";
import { useLocation, Link } from "react-router-dom";
import { convertToTitleCase, extractCategoryFromUrl } from "@/utils";
import {
  categoryLinksMap,

} from "@/constants";

const SideBar: React.FC = () => {
  const location = useLocation();
  const currentCategory = extractCategoryFromUrl(location.pathname);

  console.log(location)
  console.log(categoryLinksMap)
  const getCategoryLinks = (categoryLinks: any[]) => {
     
    return categoryLinks.map((link, index) => 
    (
      <li key={index} >
        <Link to={link.route} className={location.pathname === link.route? `font-semibold` : ""}>{link.label}</Link>
      </li>
    ));
  };



      

  return (
    <div className="w-[270px] px-7 py-7 hidden md:flex flex-col">
      <h1 className="font-semibold">Home /</h1>
      <p className="capitalize text-[28px] font-bold my-5">
        {convertToTitleCase(location.pathname)}
      </p>
      <ul className="flex flex-col gap-2 font-medium">
        {currentCategory &&
          categoryLinksMap[currentCategory] &&
          getCategoryLinks(categoryLinksMap[currentCategory])}
      </ul>
      <hr className="mt-6" />
      <FilterUi/>
    </div>
  );
};

export default SideBar;
