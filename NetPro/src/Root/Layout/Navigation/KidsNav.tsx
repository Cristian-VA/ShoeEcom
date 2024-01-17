import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 
export function KidsNav() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-semibold uppercase text-[16px] ">Kids</Button>
      </HoverCardTrigger>
      <HoverCardContent className=" mx-auto w-screen  shadow-none flex justify-center border-none  border-b-2">
        <div className="flex justify-between space-x-4 w-full  max-w-[1440px] border-b-2 pb-4 px-5">
          
          <div className="w-[360px]">
            <h1>SHOES</h1>
          </div>

          
          
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
