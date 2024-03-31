
import { Link } from 'react-router-dom'
import { scrollToTop } from '@/utils'
const Homebanner = ({scrollToTargetMen,scrollToTargetWomen}:{scrollToTargetMen:any,scrollToTargetWomen:any}) => {
  return (
    <>
    <div className="relative md:hidden flex justify-center">
          <img src="/assets/Home/MobileBanner.png" className="w-full object-cover  max-h-[500px]" alt="Home Banner, leather shoes" />
          <div className="absolute top-0 p-5 lg:p-6 bg-transparent mx-auto block   h-full">
              <div className="h-full w-full flex flex-col bg-transparent justify-center items-center">
                  <h1 className="bg-transparent font-bold text-[28px]  drop-shadow-sm text-white ">Timeless Comfort, Leather Luxury</h1>
                  <p className="bg-transparent font-semibold text-[16px]  drop-shadow-sm text-white">Discover the next level of comfort. Check out our leather Shoes</p>
                  <div className="flex bg-transparent mt-6 justify-end gap-4">
                      <Link onClick={scrollToTop} to={"/collections/men-sneakers"} className="btn-inverted hover:bg-gray-900 border-none"> SHOP MEN</Link>
                      <Link onClick={scrollToTop} to={"/collections/women-sneakers"} className="btn-inverted hover:bg-gray-900 border-none "> SHOP WOMEN</Link>
                  </div>
              </div>
          </div>
      </div><div className="relative hidden md:block">
              <img src="/assets/Home/Banner.png" className="w-full object-cover" alt="Home Banner, leather shoes" />
              <div className="absolute left-0 top-[0] lg:flex flex-col p-5 lg:p-6 text-[18px] lg:text-[22px] mt-10 hidden ">
                  <h1 className="font-bold mb-2 leading-snug"> FEATURED</h1>
                  <p onClick={scrollToTargetMen} className="text-[16px] lg:text-[18px] hover:underline cursor-pointer"> Men's Shoes</p>
                  <p onClick={scrollToTargetWomen} className="text-[16px] lg:text-[18px] hover:underline cursor-pointer"> Women's Shoes</p>
                  <p className="text-[16px] lg:text-[18px] hover:underline cursor-pointer"> New Arrivals</p>
              </div>

              <div className="absolute right-0 bottom-0 p-5 lg:p-6 bg-transparent text-right">
                  <h1 className="bg-transparent font-bold text-[46px]  drop-shadow-sm text-white ">Timeless Comfort, Leather Luxury</h1>
                  <p className="bg-transparent font-semibold text-[28px]  drop-shadow-sm text-white">Discover the next level of comfort. Check out our leather Shoes</p>
                  <div className="flex bg-transparent mt-6 justify-end gap-4">
                      <Link onClick={scrollToTop} to={"/collections/men-sneakers"} className="btn-inverted hover:bg-gray-900 border-none "> SHOP MEN</Link>
                      <Link onClick={scrollToTop} to={"/collections/women-sneakers"} className="btn-inverted hover:bg-gray-900 border-none"> SHOP WOMEN</Link>
                  </div>
              </div>
          </div>
          </>
  )
}

export default Homebanner