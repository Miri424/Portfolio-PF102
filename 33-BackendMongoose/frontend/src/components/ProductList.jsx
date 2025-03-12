import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {

    const products = async () => {
        const response = await axios()
    }   

  return (
    <div className='container'>
        <div className='product-container'>
            <ProductItem />
        </div>
    </div>
  )
}

export default ProductList