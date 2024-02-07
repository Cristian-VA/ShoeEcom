
import { helpInfo, shopInfo, companyInfo } from "@/constants"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="w-screen bg-gray-900 bg-opacity-85">
    <div className='container bg-transparent  bottom-0'>
      <div className="w-full  flex lg:flex-row flex-col bg-transparent mt-16 mb-6 max-w-[900px]  justify-between  ">
        <div className="flex flex-col bg-transparent gap-2 mb-6 text-center lg:text-left">
          <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-2"> Help</h1>
          {helpInfo.map((info) => (
            <p className="bg-transparent font-medium text-white text-[14px]">{info}</p>
          ))}

        </div>

        <div className="flex flex-col bg-transparent gap-2 mb-6 text-center lg:text-left">
          <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-2"> shop</h1>
          {shopInfo.map((info) => (
            <Link to={info.route} className="bg-transparent">
            <p className="bg-transparent font-medium text-white text-[14px]">{info.label}</p>
            </Link>
          ))}

        </div>

        <div className="flex flex-col bg-transparent gap-2 mb-6 text-center lg:text-left">
          <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-2"> company</h1>
          {companyInfo.map((info) => (
            <p className="bg-transparent font-medium text-white text-[14px]">{info}</p>
          ))}

        </div>

      </div>

      <div className="w-full  flex lg:flex-row flex-col bg-transparent mt-16 mb-6 max-w-[900px]  justify-between  ">
        <div className="flex flex-col bg-transparent">
          <h1 className="bg-transparent font-semibold text-[22px] text-white  uppercase mb-2"> OUR SOCIALS</h1>

        </div>
        </div>


    </div>
    </div>
  )
}

export default Footer