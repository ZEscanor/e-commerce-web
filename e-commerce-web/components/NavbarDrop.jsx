import React from 'react';
import {Product} from '.'
import {client} from '../lib/client';
import { useStateContext } from '../context/StateContext';



const NavbarDrop = ({products}) => {
  

  
  


console.log(products, 'products from navbar drop')

  
  return (
     
    <div style={
      {
        backgroundColor: 'white',
        height: '400px',
        width: '100%',
        position: 'fixed',
        zIndex: '100000'
      }
    }>
    <div className='products-container'>
      {products?.slice(0,5).map((product)=>
             <Product key={product.id} product= {product}/>
      )}
      </div>
    </div>
  )
}





// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]' // grab all products from sanity dashboard
//   const products = await client.fetch(query);

//   return {
//     props: {
//       products, bannerData
//     }
//   }
// }

export default NavbarDrop