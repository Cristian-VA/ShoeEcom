
import { Skeleton } from '@/components/ui/skeleton'

const ProductCardSkeleton = ({fourInline = false}:{fourInline?:boolean}) => {
  return (
    <div className={`flex flex-col w-1/2 lg:w-1/3 md:p-4 p-2 gap-2 ${fourInline && "xl:w-1/4 md:w-1/3 "}`}>
  <div className='bg-gray-100 w-full' style={{ paddingBottom: '100%' }}>
    <Skeleton className='absolute inset-0 w-full h-full' />
  </div>
  <Skeleton className='md:h-[32px] h-[20px] md:w-[160px] w-[90px] bg-gray-100' />
  <Skeleton className=' h-[45px] md:w-full hidden md:block bg-gray-100' />
</div>
  )
}

export default ProductCardSkeleton