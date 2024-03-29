
import {motion} from "framer-motion"
import MenAccordion from './MobileAccordion/MenAccordion';
import WomenAccordion from "./MobileAccordion/WomenAccordion";
import KidsAccordion from "./MobileAccordion/KidsAccordion";



const MobileNav = ({toggleIsOpen}:{toggleIsOpen:() => void}) => {
  return (
    
   
    <motion.div
    initial={{ x: '-100%' }}  
      animate={{ x: 0 }}      
      exit={{ x: '-100%' }}      
      transition={{ duration: 0.3 }}

      className="fixed  z-50  w-screen top-[60px] px-7 py-5 md:hidden  overflow-scroll bg-gray-50 " 
      style={{ height: 'calc(100vh - 60px)' }}
     
    >
     <div className="flex flex-col w-full bg-opactity-0">
      <MenAccordion toggleIsOpen={toggleIsOpen}/>
      <WomenAccordion toggleIsOpen={toggleIsOpen}/>
      <KidsAccordion toggleIsOpen={toggleIsOpen}/>

     </div>
    </motion.div>
    
   
  );
};


export default MobileNav