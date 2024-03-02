import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Link } from 'react-router-dom'
  import ProductCard from './ProductCard'

const ProductSlider = ({title, products}: {title:string, products:any}) => {
    const mockInfo = [{
        imagesColor1:["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5ac65d26d4c2db79b520bccdd9609_9366/Zapatillas_gazelle_Azul_IE8500_01_standard.jpg"],
        productName: "test",
        price: 100,
        category: "men-sneakers",
        $id: "blank"
    },
    {
        imagesColor1:["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5ac65d26d4c2db79b520bccdd9609_9366/Zapatillas_gazelle_Azul_IE8500_01_standard.jpg"],
        productName: "test",
        price: 100,
        category: "men-sneakers",
        $id: "blank"

    },
    {
        imagesColor1:["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5ac65d26d4c2db79b520bccdd9609_9366/Zapatillas_gazelle_Azul_IE8500_01_standard.jpg"],
        productName: "test",
        price: 100,
        category: "men-sneakers",
        $id: "blank"
    },
    {
        imagesColor1:["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5ac65d26d4c2db79b520bccdd9609_9366/Zapatillas_gazelle_Azul_IE8500_01_standard.jpg"],
        productName: "test",
        price: 100,
        category: "men-sneakers",
        $id: "blank"
    },
    {
        imagesColor1:["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5ac65d26d4c2db79b520bccdd9609_9366/Zapatillas_gazelle_Azul_IE8500_01_standard.jpg"],
        name: "test",
        price: 100,
        category: "men-sneakers",
        $id: "blank"
    },
    {
        imagesColor1:["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdd5ac65d26d4c2db79b520bccdd9609_9366/Zapatillas_gazelle_Azul_IE8500_01_standard.jpg"],
        name: "test",
        price: 100,
        category: "men-sneakers",
        $id: "blank"
    }]

    const mapProducts= mockInfo?.map((product:any, index:number) => (
        <CarouselItem className="basis-1/2 lg:basis-1/3 xl:basis-1/4" key={index}>
           <ProductCard simple product={product}/>
        </CarouselItem>
      ))

  return (
    <div className=' w-full border-2 flex flex-col my-6'>
        <h1 className="uppercase md:text-[22px] font-semibold text-[18px] my-2">
               {title} </h1>
        
               <Carousel className=' mx-auto w-full minus-64px  ' >
         <CarouselContent>
        { mapProducts}
           
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
       </Carousel>
    </div>
  )
}

export default ProductSlider