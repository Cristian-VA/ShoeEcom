
import { AnimatePresence } from 'framer-motion'
import {motion} from "framer-motion"
import { Button } from '@/components/ui/button'


const PopUpModal = ({open, setOpen, children}:{open:boolean, setOpen:any, children:React.ReactNode}) => {
  return (
    <AnimatePresence>
    {open && (
      <div className={"w-screen min-h-screen h-full fixed top-0 bg-gray-800 z-50 bg-opacity-55 flex justify-center items-center   "}>
        <motion.div
          className="w-[800px] h-[600px] shadow-2xl m-2"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "140%" }}
          transition={{ duration: 0.4 }}
          
        >
          <Button onClick={() => setOpen(false)} variant="ghost" className=" w-full  border-opacity-55  border-b-[1.5px] border-gray-600 hover:bg-gray-100 bg-white transition  "> 
          <img
      src="/assets/icons/close.svg"
      alt="close filters"
      className="w-[30px] h-[30px] bg-transparent rotate-90 "
      
    /></Button>
          {children}
        </motion.div>
      </div>
    )}
    </AnimatePresence>
  )
}

export default PopUpModal



