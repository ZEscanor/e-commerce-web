import React from 'react'
import { Product } from '../../components'
import {client} from "../../lib/client";
const Home = ({products,bannerData}) => { //We Get our prouducts from the async call at the bottom
  return (
    <>
    {/* {console.log(bannerData)} */}
    
   

    <div className='products-container'>
      {products?.map((product)=>
             <Product key={product.id} product= {product}/>
      )}
    </div>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]' // grab all products from sanity dashboard
  const products = await client.fetch(query);

  return {
    props: {
      products
    }
  }
}
export default Home