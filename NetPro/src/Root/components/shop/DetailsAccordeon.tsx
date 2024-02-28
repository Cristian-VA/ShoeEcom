import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

 

const DetailsAccordeon = ({description, imgUrl, details}:{description:any[], imgUrl?:string, details:any[]}) => {
  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="font-semibold my-1 uppercase text-[16px]">Description</AccordionTrigger>
    <AccordionContent>
      <div className="flex flex-col xl:flex-row w-full gap-6">
            <div className="text-justify" >
                <h1 className="font-semibold text-[20px] leading-6">{description[0]}</h1>
                <p className="text-[16px] leading-6 my-4">{description[1]}</p>
                {description[2] && (<p className="text-[16px] leading-6 my-4">{description[2]}</p>)}

            </div>

            {imgUrl &&<img src={imgUrl} alt="product image"  className="xl:w-1/2 xl:block  object-cover w-full "/>}
      </div>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
        <AccordionTrigger className="font-semibold my-1 uppercase text-[16px]">Details</AccordionTrigger>
        <AccordionContent>
        <ul className="flex flex-wrap flex-col gap-4">
            {details?.map((detail, index) => (
                <li key={index} className=" text-[16] font-medium">- {detail}</li>
            ))}
        </ul>
        </AccordionContent>
      </AccordionItem>
</Accordion>
)}

export default DetailsAccordeon