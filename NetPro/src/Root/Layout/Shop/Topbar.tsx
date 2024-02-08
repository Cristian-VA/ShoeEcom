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
import { extractCategoryFromUrl } from '@/utils';
import { categoryLinksMap } from "@/constants";


const Topbar = () => {
  const location = useLocation();
  const currentCategory = extractCategoryFromUrl(location.pathname);

  const getCategoryLinks = (categoryLinks: any[]) => {
    return categoryLinks.map((link, index) => (
      <li key={index} className="hover:underline bg-transparent">
        <Link className="bg-transparent" to={link.route}>{link.label}</Link>
      </li>
    ));
  };
  return (
    <>
    <div className='md:hidden w-screen px-5 pt-6 pb-3'>
      <h1 className='font-semibold'>Home /  <span className='capitalize'> {convertToTitleCase(location.pathname)} </span></h1>
    </div>

    <div className='md:hidden w-screen bg-gray-50   py-4 overflow-x-auto whitespace-nowrap custom-scrollbar'>
    <ul className="inline-flex bg-gray-50  gap-5 font-medium px-5  min-w-screen">
    {currentCategory && categoryLinksMap[currentCategory] && getCategoryLinks(categoryLinksMap[currentCategory])}
           
      </ul>
    </div>

    </>
  )
}

export default Topbar