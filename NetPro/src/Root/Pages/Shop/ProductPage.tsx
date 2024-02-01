import React from 'react'
import { useParams } from "react-router-dom"

const ProductPage = () => {
    const { id } = useParams();

  return (
    <div className='container'>ProductPage</div>
  )
}

export default ProductPage