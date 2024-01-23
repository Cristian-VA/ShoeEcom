import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [isSignUp, setIsSignUp] = useState(false)
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setIsSignUp(true)
 
        
      };

  return (
    <div className="flex flex-1 flex-col bg-gray-50   justify-center items-center">
        <div className=" max-w-[1440px] my-10 md:my-14 bg-gray-50 px-7">
         {isSignUp? (
           <>
           <div className="px-5">
            <h1 className="md:text-[36px] text-[28px] font-bold text-center bg-gray-50"> You're In!</h1>
            <h1 className="md:text-[20px] text-[16px] text-center my-5 max-w-[800px] bg-gray-50"> We've received your info and are here to support. Expect news on all things comfy and eco-conscious.</h1>
            </div>
           </>
         ) :( 
            <>
        <h1 className="md:text-[36px] text-[28px] font-bold text-center bg-gray-50"> Be the First In Line!</h1>
        <h1 className="md:text-[20px] text-[16px] text-center my-5 max-w-[800px] bg-gray-50"> Subscribe to our newsletter for exclusive access to limited editions, material innovations, and exciting updates. Join now and stay ahead.</h1>
        
        <form onSubmit={handleSubmit} className="bg-gray-50 flex md:flex-row flex-col w-full max-w-[700px] gap-4 px-5 ">
       
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" h-[44.5px] my-auto border-2 border-b-gray-800 border-white md:w-[1000px]"
            placeholder=" Enter your email adress"
          />
        
        <Button type="submit" className="bg-gray-900 transition text-white hover:bg-white text-[16px] py-5 px-7 font-semibold drop-shadow-sm border-2 border-gray-800 hover:text-gray-800 my-auto">Subscribe</Button>
      </form>
      </>
      )}  

        </div>
     
    </div>
  );
};

export default Contact;
