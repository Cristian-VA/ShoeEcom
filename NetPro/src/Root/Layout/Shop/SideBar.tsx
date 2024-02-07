import React from "react";
import { Link } from "react-router-dom";
import {
  MenShoesLinks,
  WomenShoesLinks,
  WomenAccesoriesLinks,
  MenAccesoriesLinks,
  KidsLinks,
} from "@/constants";

import { useLocation } from "react-router-dom";
import { convertToTitleCase } from "@/utils";
import { extractCategoryFromUrl } from "@/utils";

const SideBar = ({ category }: { category: string }) => {
  const location = useLocation();

  const currentCategory = extractCategoryFromUrl(location.pathname);
  console.log(currentCategory);

  return (
    <div className="w-[270px] px-7 py-7 hidden md:flex flex-col">
      <h1 className="font-semibold">Home /</h1>
      <p className="capitalize text-[28px] font-bold my-5">
        {convertToTitleCase(location.pathname)}
      </p>
      <ul className="flex flex-col gap-2 font-medium ">
        {currentCategory === "men-sneakers" ||
        currentCategory === "men-active" ||
        currentCategory === "men-hiking" ||
        currentCategory === "men-slip-ons" ||
        currentCategory === "men"
          ? MenShoesLinks.map((link, index) => (
              <li key={index} className="hover:underline">
                <Link to={link.route}>{link.label}</Link>
              </li>
            ))
          : currentCategory === "men-accesories" ||
            currentCategory === "men-belts" ||
            currentCategory === "men-briefcases" ||
            currentCategory === "men-wallets"
          ? MenAccesoriesLinks.map((link, index) => (
              <li key={index} className="hover:underline">
                <Link to={link.route}>{link.label}</Link>
              </li>
            ))
          : category === "women"
          ? WomenShoesLinks.map((link, index) => (
              <li key={index} className="hover:underline">
                <Link to={link.route}>{link.label}</Link>
              </li>
            ))
          : category === "womenAc"
          ? WomenAccesoriesLinks.map((link, index) => (
              <li key={index} className="hover:underline">
                <Link to={link.route}>{link.label}</Link>
              </li>
            ))
          : category === "kids"
          ? KidsLinks.map((link, index) => (
              <li key={index} className="hover:underline">
                <Link to={link.route}>{link.label}</Link>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default SideBar;
