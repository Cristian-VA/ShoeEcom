import { useParams } from 'react-router-dom'
import MenCategory from '@/Root/components/shop/MenCategory'

const MenCollection = () => {
    const {category} = useParams()
   

    
  return (
    <MenCategory category={category || ""}/>
  )
}

export default MenCollection