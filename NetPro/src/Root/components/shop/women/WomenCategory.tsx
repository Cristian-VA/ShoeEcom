import { useGetMenCollectionBycategory } from '@/lib/queries/queries&mutations'
import Loader from '@/Root/components/Loader'
import ProductGrid from '@/Root/components/shop/ProductGrid'



const WomenCategory = ({category}:{category:string}) => {
  const {  data, isPending, isRefetching  } = useGetMenCollectionBycategory(category)
  
  

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

export default WomenCategory