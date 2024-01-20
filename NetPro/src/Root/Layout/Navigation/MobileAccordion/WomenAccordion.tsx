import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WomenShoesLinks, WomenAccesoriesLinks } from "@/constants";
import { Link } from "react-router-dom";

const WomenAccordion = ({ toggleIsOpen }: { toggleIsOpen: () => void }) => {
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
                  <Link to={link.route} className="bg-gray-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">
              BESTSELLERS
            </h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
              <li className="bg-gray-50"> link 1</li>
              <li className="bg-gray-50"> link 2</li>
              <li className="bg-gray-50"> link 3</li>
              <li className="bg-gray-50"> link 4</li>
            </ul>

            <h1 className="font-semibold text-[16px] bg-gray-50">ACCESORIES</h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
              {WomenAccesoriesLinks.map((link, index) => (
                <li key={index} className="mobile-link" onClick={toggleIsOpen}>
                  <Link to={link.route} className="bg-gray-50">
                    {link.label}
                  </Link>
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

export default WomenAccordion;
