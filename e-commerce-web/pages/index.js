import React, {useState, useRef, useEffect} from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import {client} from "../lib/client";
const Home = ({products,bannerData}) => { //We Get our prouducts from the async call at the bottom

const [carouselCounter, setCarouselCounter] = useState(1)
 
const timeoutRef = useRef(null);

const resetTime = () => {
  if(timeoutRef?.current){
    clearTimeout(timeoutRef.current);
  }
}
  const handleClick = (id) => {
    setCarouselCounter(id)
  }

  useEffect(() => {

    resetTime();
    // console.log(carouselCounter)
    timeoutRef.current = setTimeout(() => {
      setCarouselCounter((prevCounter) =>
       prevCounter === bannerData.length -3 ? 1 : prevCounter + 1
      )
    }, 10000);
  
    return () => {
      resetTime();
    };
  }, [carouselCounter])
  

  return (
    <div>
      <div className='gradientDiv'>

    { carouselCounter == 2 ? 
   <div className='carousel1'>
   <HeroBanner heroBanner={bannerData.length && bannerData[1]}/> 
   <CarouselDots handleClick={handleClick}/>
     </div> :
   carouselCounter == 3 ?  
     
   <div className='carousel2'>
   <HeroBanner heroBanner={bannerData.length && bannerData[2]}/> 
   <CarouselDots handleClick={handleClick}/>
     </div> :
     
     carouselCounter == 4 ?
     
     <div className='carousel3'>
   <HeroBanner heroBanner={bannerData.length && bannerData[3]}/> 
   <CarouselDots handleClick={handleClick}/>
     </div> :
     
     <div className='carousel'>
   <HeroBanner heroBanner={bannerData.length && bannerData[0]}/> 
   <CarouselDots handleClick={handleClick}/>
     </div>   }

     {/* <a className='prev'>
     {'<'}
     </a>
     <a className='next'>
      {'>'}
     </a> */}

    </div>
    
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
    </div>
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




const CarouselDots = ({handleClick}) => {
  return (
    <div style={{textAlign:"center"}}>
  <span class="dot" onClick={() =>handleClick(1)}></span>
  <span class="dot" onClick={() =>handleClick(2)}></span> 
  <span class="dot" onClick={() =>handleClick(3)}></span> 
  <span class="dot" onClick={() =>handleClick(4)}></span>
   </div>
  )
}

