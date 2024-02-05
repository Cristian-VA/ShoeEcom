
import { Skeleton } from '@/components/ui/skeleton'

const ProductCardSkeleton = () => {
  return (
    <div className='flex flex-col w-1/2 lg:w-1/3 md:p-4 p-2 gap-2'>
  <div className='bg-gray-100 w-full' style={{ paddingBottom: '100%' }}>
    <Skeleton className='absolute inset-0 w-full h-full' />
  </div>
  <Skeleton className='md:h-[32px] h-[20px] md:w-[160px] w-[90px] bg-gray-100' />
</div>
  )
}

export default ProductCardSkeleton