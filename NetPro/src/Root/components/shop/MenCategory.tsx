import { useGetMenCollectionBycategory, useGetKidsCollectionBycategory, useGetWomenCollectionBycategory, useGetSocksCollection, useGetAccesoryCollectionBycategory } from '@/lib/queries/queries&mutations'
import ProductGrid from '@/Root/components/shop/ProductGrid'
import { useLocation } from 'react-router-dom'
import { extractCategoryFromUrl } from '@/utils'
import { useFilterContext } from '@/Context/FilterContext'



const MenCategory = ({category}:{category:string}) => {
  const { filters  } = useFilterContext()
  const fetchParams = {
    category: category,
    filters: filters
  }

  const location = useLocation()
  const currentCategory:any = extractCategoryFromUrl(location.pathname)
  const isWomenCategory = currentCategory.startsWith("women")
  const isMenCategory = currentCategory.startsWith("men")
  const isKidsCategory = currentCategory.startsWith("kids")
  const isSocksCategory = currentCategory.endsWith("socks")
  const isWaterBottleCategory = currentCategory.endsWith("bottles")
  const isWomenBags = currentCategory.startsWith("women-bags")
  const isMenBackpacks = currentCategory.startsWith("men-backpacks")
  let data = null
  let isPending = false
  
  
  

  if (isSocksCategory) {
    const {  data: socksData, isPending:isPendingSocks  } = useGetSocksCollection(fetchParams);
    data = socksData;
    isPending = isPendingSocks;
   
  } else if (isWaterBottleCategory) {
    const {  data: kidsData, isPending:isPendinKids } = useGetAccesoryCollectionBycategory(fetchParams);
    data = kidsData;
    isPending = isPendinKids;
    

  
    
  } else if (isWomenBags) {
    const {  data: kidsData, isPending:isPendinKids } = useGetAccesoryCollectionBycategory(fetchParams);
    data = kidsData;
    isPending = isPendinKids;
   
   
  
    
  }else if (isMenBackpacks) {
    const {  data: kidsData, isPending:isPendinKids } = useGetAccesoryCollectionBycategory(fetchParams);
    data = kidsData;
    isPending = isPendinKids;


  
    
  } else if (isKidsCategory) {
    const {  data: kidsData, isPending:isPendinKids} = useGetKidsCollectionBycategory(fetchParams);
    data = kidsData;
    isPending = isPendinKids;
  
  } else if (isWomenCategory) {
    const {  data: womenData, isPending:isPendingWomen,   } = useGetWomenCollectionBycategory(fetchParams);
    data = womenData;
    isPending = isPendingWomen;
    
    
 
  }
  else if (isMenCategory) {
    const {  data: menData, isPending:isPendingMen } = useGetMenCollectionBycategory(fetchParams);
    data = menData;
    isPending = isPendingMen;
 
  } else {

  }
  
  

  

  return (
    <>
     
    <div className='container  pb-6 pt-2 '>
      <ProductGrid  data={data} isRefetching={isPending} />
    </div>
    
    </>
  )
}

export default MenCategory