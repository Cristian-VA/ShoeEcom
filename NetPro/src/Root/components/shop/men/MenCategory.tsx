import { useGetMenCollectionBycategory, useGetKidsCollectionBycategory, useGetWomenCollectionBycategory } from '@/lib/queries/queries&mutations'
import Loader from '@/Root/components/Loader'
import ProductGrid from '@/Root/components/shop/ProductGrid'
import { useLocation } from 'react-router-dom'
import { extractCategoryFromUrl } from '@/utils'


const MenCategory = ({category}:{category:string}) => {
  const {  data: menData, isPending:isPendingMen, isRefetching:isRefetchingMen  } = useGetMenCollectionBycategory(category)
  const {  data: womenData, isPending:isPendingWomen, isRefetching:isRefetchingWomen  } = useGetWomenCollectionBycategory(category)
  const {  data: kidsData, isPending:isPendinKids, isRefetching:isRefetchingKids } = useGetKidsCollectionBycategory(category)
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
    {isPending? <Loader/> : (
    <div className='container  py-6'>
      <ProductGrid  data={data} isRefetching={isRefetching} />
    </div>
    )}
    </>
  )
}

export default MenCategory