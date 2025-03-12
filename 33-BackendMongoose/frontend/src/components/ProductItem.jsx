import React from 'react'

const ProductItem = () => {


    
  return (
    <div className='card'>
        <div className='image-side'>
            <img src='https://picsum.photos/200/300' />
        </div>
        <div className='details-side'>
            <h2>Product Name</h2>
            <p>Product Description</p>
            <p>Price: $10.99</p>
        </div>
    </div>
  )
}

export default ProductItem