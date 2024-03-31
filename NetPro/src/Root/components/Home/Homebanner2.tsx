
import { Link } from "react-router-dom";
import { scrollToTop } from "@/utils";
type BannerType = {
  BannerImg: string;
  MobileImg: string;
  Heading: string;
  message: string;
};

const Homebanner2 = ({ Banner }: { Banner: BannerType }) => {
  return (
    <div className="flex flex-1 flex-col">
      <img
        src={Banner.BannerImg}
        className="object-cover max-h-[475px] hidden md:block"
      />
      <img
        src={Banner.MobileImg}
        className="object-cover max-h-[400px] md:hidden block"
      />
      <div className="flex flex-col items-center my-10 md:my-14 px-7">
        <h1 className="md:text-[36px] text-[28px] font-bold">{Banner.Heading}</h1>
        <p className="md:text-[20px] text-[16px] text-center max-w-[700px] my-5">
          {Banner.message}
        </p>
        <div className=" flex gap-8">
          <Link to={"/collections/men-sneakers"} className="btn-black " onClick={scrollToTop}>
            {" "}
            SHOP MEN
          </Link>
          <Link to={"/collections/women-sneakers"} className="btn-black " onClick={scrollToTop}>
            {" "}
            SHOP WOMEN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homebanner2;
