import React from 'react'
import {motion} from "framer-motion"

const MobileNav = () => {
  return (
    
   
    <motion.div
    initial={{ x: '-100%' }}  // Initially positioned outside the viewport on the left
      animate={{ x: 0 }}        // Slides in from the left
      exit={{ x: '-100%' }}      // Slides out to the left during exit
      transition={{ duration: 0.3 }}

      className="absolute  z-20  w-screen top-[60px] px-7 py-5 md:hidden  overflow-hidden bg-gray-50 " // Add a class for styling
      style={{ height: 'calc(100vh - 60px)' }}
     
    >
      This is the animated div! 
    </motion.div>
    
   
  );
};


export default MobileNav