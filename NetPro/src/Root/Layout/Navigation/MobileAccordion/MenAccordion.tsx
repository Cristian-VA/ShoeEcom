import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenShoesLinks, MenAccesoriesLinks } from "@/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "@/utils";
import { useGetMenBestSellers } from "@/lib/queries/queries&mutations";

const MenAccordion = ({toggleIsOpen}:{toggleIsOpen:() => void}) => {
  const location = useLocation()
  const {data:menData} = useGetMenBestSellers()
    
  const bestSeller = menData?.documents.map((product, index) => {
    return (
      <li key={index} onClick={toggleIsOpen} className="bg-transparent">
        <Link onClick={scrollToTop} className={location.pathname === `/collections/${product?.category}/${product?.$id}`? "font-semibold bg-transparent" : "bg-transparent"} to={`/collections/${product?.category}/${product?.$id}`}>{product?.productName}</Link>
      </li>
    )
  })

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1 border-none">
        <AccordionTrigger className="bg-gray-50 text-[18px] font-semibold ">
          MEN
        </AccordionTrigger>
        <AccordionContent className="bg-gray-50">
          <div className=" flex flex-col gap-4 bg-gray-50">
            <h1 className="font-semibold text-[16px] bg-gray-50">SHOES</h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">

              {MenShoesLinks.map((link, index) => (
                <li key={index} className="mobile-link" onClick={toggleIsOpen}>
                  <Link onClick={scrollToTop} to={link.route} className={location.pathname === link.route? "font-semibold bg-gray-50" : "bg-gray-50"}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">
              BESTSELLERS
            </h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
             {bestSeller}
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">ACCESORIES</h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
            {MenAccesoriesLinks.map((link, index) => (
                <li key={index} className="mobile-link" onClick={toggleIsOpen}>
                  <Link onClick={scrollToTop} to={link.route} className="bg-gray-50">{link.label}</Link>
                </li>
              ))}
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">FEATURED</h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
              <li className="bg-gray-50"> NEW ARRIVALS</li>
              <li className="bg-gray-50">
                {" "}
                BRAND NEW SLIPPER SEASON COLLECTION
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MenAccordion;
