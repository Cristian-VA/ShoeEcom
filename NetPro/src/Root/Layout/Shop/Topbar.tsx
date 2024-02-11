import { convertToTitleCase } from "@/utils";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { extractCategoryFromUrl } from "@/utils";
import { categoryLinksMap } from "@/constants";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import FilterUi from "./FilterUi";
import { Ghost } from "lucide-react";

const Topbar = () => {
  const location = useLocation();
  const currentCategory = extractCategoryFromUrl(location.pathname);
  const [open, setOpen] = useState(false);

  const getCategoryLinks = (categoryLinks: any[]) => {
    return categoryLinks.map((link, index) => (
      <li key={index} className="hover:underline bg-transparent">
        <Link className="bg-transparent" to={link.route}>
          {link.label}
        </Link>
      </li>
    ));
  };
  return (
    <>
      <div className="md:hidden w-screen px-5 pt-6 pb-3">
        <h1 className="font-semibold">
          Home /{" "}
          <span className="capitalize">
            {" "}
            {convertToTitleCase(location.pathname)}{" "}
          </span>
        </h1>
      </div>

      <div className="md:hidden w-screen bg-gray-50   py-4 overflow-x-auto whitespace-nowrap custom-scrollbar">
        <ul className="inline-flex bg-gray-50  gap-5 font-medium px-5  min-w-screen">
          {currentCategory &&
            categoryLinksMap[currentCategory] &&
            getCategoryLinks(categoryLinksMap[currentCategory])}
        </ul>
      </div>

      <div className="flex px-[28px] mt-4 md:hidden">
        <Button
          className="ml-auto px-2 rounded-[4px] justify-between gap-3 uppercase border-[1.5px] border-gray-700 border-opacity-80 transition hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          <p className="bg-transparent font-medium">Filters</p>
          <img
            src="/assets/icons/filter.svg"
            alt="Log in"
            className="w-[20px] h-[20px] bg-transparent relative items-end my-auto"
          />
        </Button>
        <AnimatePresence>
          {open && (
            <div className="w-screen h-screen fixed top-0 left-0 bg-gray-800 z-50 bg-opacity-55  ">
              <motion.div
                className="w-[60%]  sm:[50%]   right-0 ml-auto  h-screen bg-transparent   flex flex-col items-start custom-scrollbar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                
              >
                <Button onClick={() => setOpen(false)} variant="ghost" className=" w-full  border-opacity-55  border-b-[1.5px] border-gray-500 hover:bg-gray-100 bg-white transition  "> 
                <img
            src="/assets/icons/close.svg"
            alt="close filters"
            className="w-[30px] h-[30px] bg-transparent "
            
          /></Button>
                <FilterUi />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Topbar;
