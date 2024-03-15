import { Button } from '@/components/ui/button'
import {  useAuth } from '../components/utils/AuthContext'
import { useGetCurrentUser } from '@/lib/queries/queries&mutations'
import { useGetOrdersById } from '@/lib/queries/queries&mutations'


const Account = () => {
   const {data:user} = useGetCurrentUser()
   const {data:orders} =useGetOrdersById(user?.$id || "")
   const {logoutUser} = useAuth()

   const transformedData = orders?.documents.map((doc) => {
    const products = [];
    for (let i = 0; i < doc.productsName.length; i++) {
        products.push({
            ProductsName: doc.productsName[i],
            Size: doc.size[i],
            Colors: doc.colors[i],
            Quantities: doc.quantities[i],
            Images: doc.images[i],
        });
    }
    return products;
});
console.log(transformedData)

   
  return (
    <div className='container'>
        <Button onClick={() => logoutUser()} >logout</Button>
        
    </div>
  )
}

export default Account