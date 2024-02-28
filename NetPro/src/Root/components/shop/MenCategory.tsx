import { useGetMenCollectionBycategory, useGetKidsCollectionBycategory, useGetWomenCollectionBycategory, useGetSocksCollection } from '@/lib/queries/queries&mutations'
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
  let data = null
  let isPending = false
  let isRefetching = null
  
  

  if (isSocksCategory) {
    const {  data: socksData, isPending:isPendingSocks, isRefetching:isRefetchingSocks  } = useGetSocksCollection(fetchParams);
    data = socksData;
    isPending = isPendingSocks;
    isRefetching = isRefetchingSocks;
  } else if (isKidsCategory) {
    const {  data: kidsData, isPending:isPendinKids, isRefetching:isRefetchingKids } = useGetKidsCollectionBycategory(fetchParams);
    data = kidsData;
    isPending = isPendinKids;
    isRefetching = isRefetchingKids;
  } else if (isWomenCategory) {
    const {  data: womenData, isPending:isPendingWomen, isRefetching:isRefetchingWomen  } = useGetWomenCollectionBycategory(fetchParams);
    data = womenData;
    isPending = isPendingWomen;
    isRefetching = isRefetchingWomen;
    
 
  }
  else if (isMenCategory) {
    const {  data: menData, isPending:isPendingMen, isRefetching:isRefetchingMen  } = useGetMenCollectionBycategory(fetchParams);
    data = menData;
    isPending = isPendingMen;
    isRefetching = isRefetchingMen;
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