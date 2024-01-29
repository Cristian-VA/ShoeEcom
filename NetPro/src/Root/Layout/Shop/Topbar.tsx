import React from 'react'
import { convertToTitleCase } from "@/utils";
import { useLocation } from 'react-router-dom';
import {
  MenShoesLinks,
  WomenShoesLinks,
  WomenAccesoriesLinks,
  MenAccesoriesLinks,
  KidsLinks,
} from "@/constants";
import { Link } from 'react-router-dom';

const Topbar = ({ category }: { category: string }) => {
  const location = useLocation();
  return (
    <>
    <div className='md:hidden w-screen px-5 pt-6 pb-3'>
      <h1 className='font-semibold'>Home /  <span className='capitalize'> {convertToTitleCase(location.pathname)} </span></h1>
    </div>

    <div className='md:hidden w-screen bg-gray-50   py-4 overflow-x-auto whitespace-nowrap custom-scrollbar'>
    <ul className="inline-flex bg-gray-50  gap-5 font-medium px-5  min-w-screen">
        {category === "men"
          ? MenShoesLinks.map((link, index) => (
              <li key={index} className="hover:underline bg-gray-50 ">
                <Link className='bg-gray-50' to={link.route}>{link.label}</Link>
              </li>
            ))
          : category === "menAc"
          ? MenAccesoriesLinks.map((link, index) => (
              <li key={index} className="hover:underline bg-gray-50 ">
                <Link className='bg-gray-50' to={link.route}>{link.label}</Link>
              </li>
            ))
          : category === "women"
          ? WomenShoesLinks.map((link, index) => (
              <li key={index} className="hover:underline bg-gray-50 ">
                <Link className='bg-gray-50' to={link.route}>{link.label}</Link>
              </li>
            ))
          : category === "womenAc"
          ? WomenAccesoriesLinks.map((link, index) => (
              <li key={index} className="hover:underline bg-gray-50 ">
                <Link to={link.route}>{link.label}</Link>
              </li>
            ))
          : category === "kids"
          ? KidsLinks.map((link, index) => (
              <li key={index} className="hover:underline bg-gray-50 ">
                <Link className='bg-gray-50' to={link.route}>{link.label}</Link>
              </li>
            ))
          : ""}
      </ul>
    </div>

    </>
  )
}

export default Topbar