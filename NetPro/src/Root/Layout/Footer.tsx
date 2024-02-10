import { helpInfo, shopInfo, companyInfo } from "@/constants";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { PiPinterestLogoFill } from "react-icons/pi";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="max-w-[screen] w-full bg-gray-900 bg-opacity-85">
      <div className="container bg-transparent  bottom-0">
        <div className="w-full  flex lg:flex-row flex-col bg-transparent mt-16 mb-6 max-w-[900px]  justify-between  ">
          <div className="flex flex-col bg-transparent gap-2 mb-6 text-center lg:text-left">
            <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-2">
              {" "}
              Help
            </h1>
            {helpInfo.map((info, index) => (
              <p key={index} className="bg-transparent font-medium text-white text-[14px]">
                {info}
              </p>
            ))}
          </div>

          <div className="flex flex-col bg-transparent gap-2 mb-6 text-center  lg:text-left">
            <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-2">
              {" "}
              shop
            </h1>
            {shopInfo.map((info, index) => (
              <Link to={info.route} className="bg-transparent" key={index}>
                <p className="bg-transparent font-medium text-white text-[14px]">
                  {info.label}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col bg-transparent gap-2 mb-6 text-center lg:text-left">
            <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-2">
              {" "}
              company
            </h1>
            {companyInfo.map((info, index) => (
              <p key={index} className="bg-transparent font-medium text-white text-[14px]">
                {info}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full  flex lg:flex-row flex-col bg-transparent mt-12 mb-6 gap-12  justify-between  ">
          
        <div className="flex flex-col gap-2 items-center justify-center mb-6  bg-transparent lg:w-1/2 w-full">
            <div className="flex bg-transparent text-[24px]">
              <img
                src="/assets/Navigation/LogoWhite.png"
                className="w-[40px] h-[40px] ml-2  my-auto md:my-0 bg-transparent mr-2"
                alt="Logo"
              />

              <p className="my-auto mx-auto font-bold bg-transparent text-white t">
                {" "}
                QUILL
              </p>
              <p className="my-auto bg-transparent text-white">Stride</p>
            </div>
           <h1 className="bg-transparent text-white">© 2024 QUILLSTRIDE, Inc. All Rights Reserved.</h1>
          </div>



          <div className="flex flex-col bg-transparent justify-end  items-end  lg:w-1/2 w-full">
            <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-4 ">
              {" "}
              OUR SOCIALS
            </h1>
            <div className="flex flex-wrap max-w-[290px] bg-transparent gap-2">
              <FaSquareFacebook className="fill-white h-10 w-10 bg-transparent cursor-pointer" />
              <RiInstagramFill className="fill-white h-10 w-10 bg-transparent cursor-pointer" />
              <RiTwitterXLine className="fill-white h-10 w-10 bg-transparent cursor-pointer" />
              <FaYoutube className="fill-white h-10 w-10 bg-transparent cursor-pointer" />
              <PiPinterestLogoFill className="fill-white h-10 w-10 bg-transparent cursor-pointer" />
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default Footer;
