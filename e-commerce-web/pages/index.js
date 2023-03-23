import React from 'react'
import { Product, FooterBanner, HeroBanner, MiddleSection } from '../components';
import {client} from "../lib/client";
const Home = ({products,bannerData}) => { //We Get our prouducts from the async call at the bottom


  //console.log(randNumFun)
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {/* {console.log(bannerData)} */}
    
    <div className='products-heading'>
      <h2> Trending Products</h2>
    </div>

    <div className='products-container'>
      {products?.slice(0,5).map((product)=>
             <Product key={product.id} product= {product}/>
      )}
    </div>
    <div className='products-heading'>
      <h2>Products On Sale!</h2>
      <p style={{fontWeight:600}}>up to 30% OFF</p>
    </div>

    <div className='products-container'>
      {products?.slice(5,10).map((product)=>
             <Product key={product.id} product= {product} slash={20}/>
      )}
    </div>
    <div className='products-heading'>
      <h2> New Arrivals</h2>
    </div>

    <div className='products-container'>
      {products?.slice(0,5).map((product)=>
             <Product key={product.id} product= {product}/>
      )}
    </div>

   
       {/* <MiddleSection/> */}
   
    

    {/* <FooterBanner footerBanner = {bannerData && bannerData[0]}/> */}
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