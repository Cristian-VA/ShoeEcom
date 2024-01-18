
import {motion} from "framer-motion"
import MenAccordion from './MobileAccordion/MenAccordion';
import WomenAccordion from "./MobileAccordion/WomenAccordion";
import KidsAccordion from "./MobileAccordion/KidsAccordion";
const MobileNav = () => {
  return (
    
   
    <motion.div
    initial={{ x: '-100%' }}  // Initially positioned outside the viewport on the left
      animate={{ x: 0 }}      
      exit={{ x: '-100%' }}      
      transition={{ duration: 0.3 }}

      className="absolute  z-20  w-screen top-[60px] px-7 py-5 md:hidden  overflow-scroll bg-gray-50 " 
      style={{ height: 'calc(100vh - 60px)' }}
     
    >
     <div className="flex flex-col w-full bg-opactity-0">
      <MenAccordion/>
      <WomenAccordion/>
      <KidsAccordion/>

     </div>
    </motion.div>
    
   
  );
};


export default MobileNav