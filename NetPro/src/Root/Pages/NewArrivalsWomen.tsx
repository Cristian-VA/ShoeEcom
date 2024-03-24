import { useGetWomenNewArrivals } from "@/lib/queries/queries&mutations";
import ProductGrid from "../components/shop/ProductGrid";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NewArrivalsWomen = () => {
  const { data, isRefetching } = useGetWomenNewArrivals();
  const { pathname } = useLocation();


  return (
    <>
      <div className="relative flex">
        <img
          src="/assets/NewArrivals/Banner2.png"
          alt="Image banner for women new products"
          className="w-full object-cover"
        />
        <div className="flex flex-col bg-white bg-opacity-40 absolute sm:bottom-[40%] bottom-[10%]  border-gray-700 border-2 xl:p-4  border-opacity-25 ml-[12px] text-center  bg-transparent">
          <h1 className="bg-transparent drop-shadow-sm    text-[16px] sm:text-[26px]  md:text-[30px] lg:text-[36px] font-bold ">
            New Arrivals
          </h1>
          <p className="bg-transparent drop-shadow-md   max-w-[320px] mx-auto font-semibold  tracking-wider  text-[12px] sm:text-[16px]">
            Exclusive styles and unique color editions available exclusively
            here (while supplies last).
          </p>
        </div>
      </div>
      <div className="container flex flex-col gap-6 my-6 md:my-12 md:gap-12">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex justify-between w-full">
            <h1 className="font-bold text-[32px]">Footwear</h1>
            <div className=" flex    font-medium border-opacity-10">
              <Link
                to={"/new-arrivals/men"}
                className={`px-4 py-2 border-gray-700 border-2 flex items-center  ${
                  pathname === "/new-arrivals/men" && "text-white bg-gray-700"
                } `}
              >
                <p className="text-inherit bg-inherit">Men</p>
              </Link>
              <Link
                to={"/new-arrivals/women"}
                className={`px-4 py-2 border-gray-700 border-2 flex items-center  ${
                  pathname === "/new-arrivals/women" && "text-white bg-gray-700"
                } `}
              >
                <p className="text-inherit bg-inherit">Women</p>
              </Link>
            </div>
          </div>
          <p className="font-medium max-w-[620px] md:text-[18px]">
            From timeless sneakers to athletic running shoes and cozy loafers,
            we have the perfect pair for every occasion in your wardrobe.
          </p>
        </div>
        <ProductGrid data={data} isRefetching={isRefetching} noPag={true} />
      </div>
    </>
  );
};

export default NewArrivalsWomen;
