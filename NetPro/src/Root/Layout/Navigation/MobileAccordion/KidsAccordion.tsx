import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { KidsLinks } from "@/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const KidsAccordion = ({ toggleIsOpen }: { toggleIsOpen: () => void }) => {
  const location = useLocation()
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1 border-none">
        <AccordionTrigger className="bg-gray-50 text-[18px] font-semibold ">
          KIDS
        </AccordionTrigger>
        <AccordionContent className="bg-gray-50">
          <div className=" flex flex-col gap-4 bg-gray-50">
            <h1 className="font-semibold text-[16px] bg-gray-50"> SHOES </h1>
            <ul className="flex flex-col w-full gap-3 bg-gray-50">
              {KidsLinks.map((link, index) => (
                <li key={index} className="mobile-link" onClick={toggleIsOpen}>
                  <Link to={link.route} className={location.pathname === link.route? "font-semibold bg-gray-50" : "bg-gray-50"}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default KidsAccordion;
