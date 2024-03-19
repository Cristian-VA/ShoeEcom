import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 import { KidsLinks } from "@/constants"
 import { Link } from "react-router-dom"
 import { useLocation } from "react-router-dom"
 import { scrollToTop } from "@/utils"
export function KidsNav() {
  const location = useLocation()
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-semibold uppercase text-[16px] ">Kids</Button>
      </HoverCardTrigger>
      <HoverCardContent className=" mx-auto w-screen  shadow-none flex justify-center border-none  border-b-2">
        <div className="flex justify-center space-x-4 w-full  max-w-[1440px] border-b-2 pb-4 px-5">
          <div className=" flex justify-between  w-[800px]">
          <div className="w-[360px]">
            <h1 className="mb-4 text-[18px] font-semibold">SHOES</h1>
            <ul className="font-normal text-[14px] flex flex-col gap-2">
            {KidsLinks.map((link, index) => (
                <li key={index}  >
                  <Link onClick={scrollToTop} to={link.route} className={location.pathname === link.route? "font-semibold " : ""} >
                    {link.label}
                  </Link>
                </li>
              ))}
              </ul>
          </div>
          <img
                    src="/assets/Navigation/KidsBanner.jpg"
                    alt="Kids Banner"
                    className="object-cover w-[600px]"
                  />
          </div>

          
          
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
