import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

 

const DetailsAccordeon = ({info, imgUrl, type= "details" || "description"}:{info:any[], imgUrl?:string, type:string}) => {
  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="font-semibold my-1 uppercase text-[20px]">{type}</AccordionTrigger>
    <AccordionContent>
      {type === "description"? (<div className="flex w-full gap-6">
            <div className="text-justify" >
                <h1 className="font-semibold text-[20px] leading-6">{info[0]}</h1>
                <p className="text-[16px] leading-6 my-4">{info[1]}</p>
                {info[2] && (<p className="text-[16px] leading-6 my-4">{info[2]}</p>)}

            </div>

            <img src={imgUrl} alt="product image"  className="w-1/2 xl:block hidden object-cover"/>
      </div>): (
        <ul className="flex flex-wrap flex-col gap-4">
            {info?.map((detail) => (
                <li className="md:text-[18px] text-[16] font-medium">{detail}</li>
            ))}
        </ul>
      )}
    </AccordionContent>
  </AccordionItem>
</Accordion>
)}

export default DetailsAccordeon