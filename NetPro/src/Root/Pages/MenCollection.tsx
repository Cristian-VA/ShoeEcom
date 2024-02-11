import { useParams } from 'react-router-dom'
import MenCategory from '@/Root/components/shop/men/MenCategory'
import { useFilterContext } from '@/Context/FilterContext'
const MenCollection = () => {
    const {category} = useParams()
    const { filters, setFilters } = useFilterContext();

    console.log(filters)
    
  return (
    <MenCategory category={category || ""}/>
  )
}

export default MenCollection