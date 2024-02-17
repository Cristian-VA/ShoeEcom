import { useGetMenCollectionBycategory, useGetKidsCollectionBycategory, useGetWomenCollectionBycategory } from '@/lib/queries/queries&mutations'
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


  const {  data: menData, isPending:isPendingMen, isRefetching:isRefetchingMen  } = useGetMenCollectionBycategory(fetchParams)
  const {  data: womenData, isPending:isPendingWomen, isRefetching:isRefetchingWomen  } = useGetWomenCollectionBycategory(fetchParams)
  const {  data: kidsData, isPending:isPendinKids, isRefetching:isRefetchingKids } = useGetKidsCollectionBycategory(fetchParams)
  const location = useLocation()
  const currentCategory:any = extractCategoryFromUrl(location.pathname)
  const isWomenCategory = currentCategory.startsWith("women")
  const isKidsCategory = currentCategory.startsWith("kids")
  let data = null
  let isPending = null
  let isRefetching = null

  if (isWomenCategory) {
    data = womenData
    isPending = isPendingWomen
    isRefetching = isRefetchingWomen
  } else if (isKidsCategory) {
    data = kidsData
    isPending = isPendinKids
    isRefetching = isRefetchingKids
  } else {
    data = menData
    isPending = isPendingMen
    isRefetching = isRefetchingMen

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