import React from 'react'
import { useGetMenCollectionBycategory } from '@/lib/queries/queries&mutations'
import Loader from '@/Root/components/Loader'
import ProductGrid from '@/Root/components/shop/ProductGrid'
const MenSneakers = () => {
  const {  data, isPending} = useGetMenCollectionBycategory("sneakers")
  console.log(data)
  

  return (
    <>
    {isPending? <Loader/> : (
    <div className='container  py-6'>
      <ProductGrid data={data}/>
    </div>
    )}
    </>
  )
}

export default MenSneakers