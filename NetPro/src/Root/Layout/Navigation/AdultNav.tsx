
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 
export function AdultNav({category}:{category:string}) {
  

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-semibold uppercase text-[16px] ">{category}</Button>
      </HoverCardTrigger>
      
      <HoverCardContent className="  mx-auto w-screen  shadow-none flex justify-center border-none">
        <div className="flex justify-center space-x-4 w-full gap-20  max-w-[1440px] border-b-2 pb-4 px-5">
          
        <div className="flex  flex-col">
            <h1 className="mb-4 text-[18px] font-semibold">SHOES</h1>
            <ul className="font-normal text-[14px] flex flex-col gap-2">
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>View All</li>
            </ul>
        </div>

        <div className="flex  flex-col">
            <h1 className="mb-4 text-[18px]">BESTSELLERS</h1>
            <ul className="font-normal text-[14px] flex flex-col gap-2">
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>View All</li>
            </ul>
        </div>

        <div className="flex  flex-col">
            <h1 className="mb-4 text-[18px]">ACCESORIES</h1>
            <ul className="font-normal text-[14px] flex flex-col gap-2">
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>View All</li>
            </ul>
        </div>

        <div className="flex  flex-col">
            <h1 className="mb-4 text-[18px]">FEATURED</h1>

              { category=== "men" && <div className="flex flex-col gap-4">
                <img src="assets/Navigation/NewArrivalsMen.png" alt="new arrivals men" className="object-cover w-[250px]" />
                <img src="assets/Navigation/MenSlipper.png" alt="men slipper collection" className="object-cover w-[250px]" />
             </div>}

             { category=== "women" && <div className="flex flex-col gap-4">
                <img src="assets/Navigation/NewArrivalsWomen.png" alt="new arrivals men" className="object-cover w-[250px]" />
                <img src="assets/Navigation/WomenSlipper.png" alt="men slipper collection" className="object-cover w-[250px]" />
             </div>}
        </div>
        </div>
      </HoverCardContent>
    
    </HoverCard>
  )
}
