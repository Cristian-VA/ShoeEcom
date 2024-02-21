import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {motion} from "framer-motion"
import { Button } from '@/components/ui/button'


const PopUpSideBar = ({open, setOpen, children}:{open:boolean, setOpen:any, children:React.ReactNode}) => {
  return (
    <AnimatePresence>
          {open && (
            <div className={"w-screen h-screen fixed top-0 left-0 bg-gray-800 z-50 bg-opacity-55  "}>
              <motion.div
                className="w-[60%]  sm:w-[50%] md:w-[30%]  right-0 ml-auto  h-screen bg-transparent   flex flex-col items-start custom-scrollbar"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                
              >
                <Button onClick={() => setOpen(false)} variant="ghost" className=" w-full  border-opacity-55  border-b-[1.5px] border-gray-500 hover:bg-gray-100 bg-white transition  "> 
                <img
            src="/assets/icons/close.svg"
            alt="close filters"
            className="w-[30px] h-[30px] bg-transparent "
            
          /></Button>
                {children}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
  )
}

export default PopUpSideBar