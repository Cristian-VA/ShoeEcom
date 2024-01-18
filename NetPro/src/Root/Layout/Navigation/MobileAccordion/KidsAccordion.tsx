import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const KidsAccordion = () => {
    return (
      <Accordion type="single" collapsible > 
        <AccordionItem value="item-1 border-none" >
          <AccordionTrigger className="bg-gray-50 text-[18px] font-semibold ">KIDS</AccordionTrigger>
          <AccordionContent className="bg-gray-50">
  
          <div className=" flex flex-col gap-4 bg-gray-50">

<h1 className="font-semibold text-[16px] bg-gray-50">LITTLE KIDS</h1>
<ul className="flex flex-col w-full gap-3 bg-gray-50" >
    <li className="bg-gray-50"> link 1</li>
    <li className="bg-gray-50"> link 2</li>
    <li className="bg-gray-50"> link 3</li>
    <li className="bg-gray-50"> link 4</li>
</ul>

<h1 className="font-semibold text-[16px] bg-gray-50">BIG KIDS</h1>
<ul className="flex flex-col w-full gap-3 bg-gray-50" >
    <li className="bg-gray-50"> link 1</li>
    <li className="bg-gray-50"> link 2</li>
    <li className="bg-gray-50"> link 3</li>
    <li className="bg-gray-50"> link 4</li>
</ul>

<h1 className="font-semibold text-[16px] bg-gray-50">FEATURED</h1>
<ul className="flex flex-col w-full gap-3 bg-gray-50" >
    <li className="bg-gray-50"> link 1</li>
    <li className="bg-gray-50"> link 2</li>
</ul>



</div>
  
              
  
      
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };
  
  export default KidsAccordion;