import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const WomenAccordion = () => {
    return (
      <Accordion type="single" collapsible > 
        <AccordionItem value="item-1" >
          <AccordionTrigger className="bg-gray-50 text-[18px] font-semibold">WOMEN</AccordionTrigger>
          <AccordionContent className="bg-gray-50">
           
          <div className=" flex flex-col gap-4 bg-gray-50">

<h1 className="font-semibold text-[16px] bg-gray-50">SHOES</h1>
<ul className="flex flex-col w-full gap-3 bg-gray-50" >
    <li className="bg-gray-50"> Sneakers</li>
    <li className="bg-gray-50"> Active Shoes</li>
    <li className="bg-gray-50"> Slip-Ons</li>
    <li className="bg-gray-50"> Hiking </li>
    <li className="bg-gray-50"> View All </li>
</ul>

<h1 className="font-semibold text-[16px] bg-gray-50">BESTSELLERS</h1>
<ul className="flex flex-col w-full gap-3 bg-gray-50" >
    <li className="bg-gray-50"> link 1</li>
    <li className="bg-gray-50"> link 2</li>
    <li className="bg-gray-50"> link 3</li>
    <li className="bg-gray-50"> link 4</li>
</ul>

<h1 className="font-semibold text-[16px] bg-gray-50">ACCESORIES</h1>
<ul className="flex flex-col w-full gap-3 bg-gray-50" >
    <li className="bg-gray-50"> link 1</li>
    <li className="bg-gray-50"> link 2</li>
    <li className="bg-gray-50"> link 3</li>
    <li className="bg-gray-50"> link 4</li>
</ul>

<h1 className="font-semibold text-[16px] bg-gray-50">FEATURED</h1>
<ul className="flex flex-col w-full gap-3 bg-gray-50" >
    <li className="bg-gray-50"> NEW ARRIVALS</li>
    <li className="bg-gray-50"> BRAND NEW SLIPPER SEASON COLLECTION</li>
   
</ul>

</div>


 
      
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };
  
  export default WomenAccordion;