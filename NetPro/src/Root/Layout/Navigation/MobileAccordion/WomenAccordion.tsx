import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WomenShoesLinks, WomenAccesoriesLinks } from "@/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGetWomenBestSellers } from "@/lib/queries/queries&mutations";
import { scrollToTop } from "@/utils";
const WomenAccordion = ({ toggleIsOpen }: { toggleIsOpen: () => void }) => {
  const location = useLocation();

  const { data } = useGetWomenBestSellers();

  const bestSellers = data?.documents.map((product) => {
    return (
      <li className="bg-transparent">
        <Link
          onClick={toggleIsOpen}
          className={
            location.pathname ===
            `/collections/${product?.category}/${product?.$id}`
              ? "font-semibold bg-transparent"
              : "bg-transparent"
          }
          to={`/collections/${product?.category}/${product?.$id}`}
        >
          {product?.productName}
        </Link>
      </li>
    );
  });

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-gray-50 text-[18px] font-semibold">
          WOMEN
        </AccordionTrigger>
        <AccordionContent className="bg-gray-50">
          <div className=" flex flex-col gap-4 bg-gray-50">
            <h1 className="font-semibold text-[16px] bg-gray-50">SHOES</h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
              {WomenShoesLinks.map((link, index) => (
                <li key={index} className="mobile-link" onClick={toggleIsOpen}>
                  <Link
                    onClick={scrollToTop}
                    to={link.route}
                    className={
                      location.pathname === link.route
                        ? "font-semibold bg-gray-50"
                        : "bg-gray-50"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">
              BESTSELLERS
            </h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
              {bestSellers}
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">ACCESORIES</h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
              {WomenAccesoriesLinks.map((link, index) => (
                <li key={index} className="mobile-link" onClick={toggleIsOpen}>
                  <Link
                    onClick={scrollToTop}
                    to={link.route}
                    className="bg-gray-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">FEATURED</h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
            <li className="bg-gray-50" onClick={scrollToTop}>
                <Link to={"/new-arrivals/women"}>NEW ARRIVALS</Link>
              </li>
              <li className="bg-gray-50" onClick={scrollToTop}>
                
                <Link to={"/collections/women-slip-ons"}>BRAND NEW SLIPPER SEASON COLLECTION</Link>
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default WomenAccordion;
