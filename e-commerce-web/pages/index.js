import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import {client} from "../lib/client";
const Home = ({products,bannerData}) => { //We Get our prouducts from the async call at the bottom
  return (
    <>
   
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
    
    <div className='products-heading'>
      <h2> Trending Products</h2>
      <p> Speakers</p>
    </div>

    <div className='products-container'>
      {products?.map((product)=>
             product.name
      )}
    </div>

    <FooterBanner/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]' // grab all products from sanity dashboard
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]' // grab all banner from sanity dashboard
  const bannerData = await client.fetch( bannerQuery);

  return {
    props: {
      products, bannerData
    }
  }
}
export default Home