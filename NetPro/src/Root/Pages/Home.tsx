import Homebanner from "../components/Home/Homebanner";
import Homebanner2 from "../components/Home/Homebanner2";
import Contact from "../components/Home/Contact";
import { Banner1, Banner2 } from "@/constants";
import HomeTabs from "../components/Home/HomeTabs";
import { useGetFeaturedMenProducts, useGetFeaturedWomenProducts } from "@/lib/queries/queries&mutations";
import ProductSlider from "../components/shop/ProductSlider";


const Home = () => {
  const {data:menProducts} = useGetFeaturedMenProducts()
  const {data:womenProducts} = useGetFeaturedWomenProducts()
  console.log(womenProducts?.documents)


  return (
    
    
    <div className="  w-full  mx-auto">
      <div className=" px-5 md:px-10 max-w-[1440px] w-full mx-auto">
      <Homebanner/>
      </div>
      <HomeTabs/>
      <Homebanner2 Banner={Banner1}/>
      <div className=" px-5 md:px-10 max-w-[1440px] w-full mx-auto pb-6">
      <ProductSlider products={menProducts?.documents} title="Featured Men Products"/>
      </div>
      <Homebanner2 Banner={Banner2}/>
      <div className=" px-5 md:px-10 max-w-[1440px] w-full mx-auto pb-6">
      <ProductSlider products={womenProducts?.documents} title="Featured Women Products"/>
      </div>
      <Contact/>
      
    </div>
    
    
  
  
  )
}

export default Home;
