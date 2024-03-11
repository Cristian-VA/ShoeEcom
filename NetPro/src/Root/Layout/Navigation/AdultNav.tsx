import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  MenShoesLinks,
  MenAccesoriesLinks,
  WomenAccesoriesLinks,
  WomenShoesLinks,
} from "@/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGetWomenBestSellers, useGetMenBestSellers } from "@/lib/queries/queries&mutations";

export function AdultNav({ category }: { category: string }) {
   const location = useLocation()
   let data = null

   if (category === "women"){
    const {data:womenData} = useGetWomenBestSellers()
    data = womenData
   } else if (category === "men"){
    const {data:menData} = useGetMenBestSellers()
    data = menData
   }
   

  

   const bestSeller = data?.documents.map((product) => {
    return (
      <li>
        <Link className={location.pathname === `/collections/${product?.category}/${product?.$id}`? "font-semibold bg-gray-50" : "bg-gray-50"} to={`/collections/${product?.category}/${product?.$id}`}>{product?.productName}</Link>
      </li>
    )
  })

   

 

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-semibold uppercase text-[16px] ">
          {category}
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="  mx-auto w-screen  shadow-none flex justify-center border-none ">
        <div className="flex justify-center space-x-4 w-full gap-20  max-w-[1440px] border-b-2 pb-4 px-5 ">
          <div className=" flex justify-between  w-[800px]">
            <div className="flex  flex-col">
              <h1 className="mb-4 text-[18px] font-semibold">SHOES</h1>
              <ul className="font-normal text-[14px] flex flex-col gap-2">
                {category === "men"
                  ? MenShoesLinks.map((link, index) => (
                      <li key={index} className="hover:underline">
                        <Link to={link.route} className={location.pathname === link.route? "font-semibold " : ""}>{link.label}</Link>
                      </li>
                    ))
                  : WomenShoesLinks.map((link, index) => (
                      <li key={index} className="hover:underline">
                        <Link to={link.route} className={location.pathname === link.route? "font-semibold " : ""}>{link.label}</Link>
                      </li>
                    ))}
              </ul>
            </div>

            <div className="flex  flex-col">
              <h1 className="mb-4 text-[18px]">BESTSELLERS</h1>
              <ul className="font-normal text-[14px] flex flex-col gap-2">
               {bestSeller}
              </ul>
            </div>

            <div className="flex  flex-col">
              <h1 className="mb-4 text-[18px]">ACCESORIES</h1>
              <ul className="font-normal text-[14px] flex flex-col gap-2">
                {category === "men"
                  ? MenAccesoriesLinks.map((link, index) => (
                      <li key={index} className="hover:underline">
                        <Link to={link.route} className={location.pathname === link.route? "font-semibold " : ""}>{link.label}</Link>
                      </li>
                    ))
                  : WomenAccesoriesLinks.map((link, index) => (
                      <li key={index} className="hover:underline">
                        <Link to={link.route} className={location.pathname === link.route? "font-semibold " : ""}>{link.label}</Link>
                      </li>
                    ))}
              </ul>
            </div>

            <div className="flex  flex-col">
              <h1 className="mb-4 text-[18px]">FEATURED</h1>

              {category === "men" && (
                <div className="flex flex-col gap-4">
                  <img
                    src="/assets/Navigation/NewArrivalsMen.png"
                    alt="new arrivals men"
                    className="object-cover w-[250px]"
                  />
                  <img
                    src="/assets/Navigation/MenSlipper.png"
                    alt="men slipper collection"
                    className="object-cover w-[250px]"
                  />
                </div>
              )}

              {category === "women" && (
                <div className="flex flex-col gap-4">
                  <img
                    src="/assets/Navigation/NewArrivalsWomen.png"
                    alt="new arrivals men"
                    className="object-cover w-[250px]"
                  />
                  <img
                    src="/assets/Navigation/WomenSlipper.png"
                    alt="men slipper collection"
                    className="object-cover w-[250px]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
