import React from 'react';
import Link from 'next/link';


import { urlFor } from '../lib/client';


const Product = ( {product: {image, name , slug, price}, slash} ) => {
  //  console.log(slash)
  return (
    <div>
      <Link href={`/product/${slug?.current}`}>
        <div className='product-card'> 
            <img src={urlFor(image && image[0])} 
            width= {250}
            height = {250}
            className= 'product-image'
            />
            <p className='product-name'>{name}</p>

            <p className='product-price'> {slash ? <s style={{textDecorationLine:"line-through",textDecorationColor:"green", textDecorationThickness:"2.5px" }}>
              <span style={{color:"black"}}>${Number(price + slash).toPrecision(4)}</span></s> : null}  
              &nbsp; &nbsp;${slash? price : price} </p>
        </div>
      </Link>
    </div>
  )
}

export default Product