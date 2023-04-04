import React, {useState, useRef, useEffect} from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import {client} from "../lib/client";

const slideImages = [{
  url: 'https://e-commerce-web2.vercel.app/djIT.webp' 
  
  
},
{
  url: "https://e-commerce-web2.vercel.app/headGirl1.webp"
},
{
  url: "https://e-commerce-web2.vercel.app/man.jpg"
},
{
  url: 'https://e-commerce-web2.vercel.app/nextGirl.webp'
}]


const Home = ({products,bannerData}) => { //We Get our prouducts from the async call at the bottom
 

const [carouselCounter, setCarouselCounter] = useState(0);
// const [responsiveVariable, setResponsiveVariable] = useState(1400);
let responsiveVariable = 1400
let mql;

if (typeof window !== "undefined") {
   mql = window.matchMedia("(max-width: 500px)");
}



// console.log(carouselCounter, slideImages[carouselCounter])
 
const timeoutRef = useRef(null);

const slidesContainer = {
 display: 'flex',
 height: '100%',
 transition: "transform ease-out 0.3s",
}

const stylin = () => ({
 ...slidesContainer,
width: parentWidth * slideImages.length,
transform: `translateX(${-(carouselCounter * parentWidth)}px)`
})

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
       prevCounter === slideImages.length - 1 ? 0 : prevCounter === 4 ? 0  : prevCounter + 1
       
      )
    }, 5000);
  
    return () => {
      resetTime();
    };
  }, [carouselCounter])
//   if(mql?.matches){
//   {console.log(mql,"hello")}
// responsiveVariable = 700
//   }
//   else if (responsiveVariable != 1400){
//     responsiveVariable = 1400
//   }
  return (
    
    <div>
    <div style={{overflow:"hidden" ,height:"100%"}}>
    <div style={{display: 'flex',
 height: '100%',
 transition: "transform ease-out 0.3s", 
 transform: `translateX(${-(carouselCounter * responsiveVariable)}px)`
 }} className='gradientDiv'>
  {slideImages.map((slide,idx) => (
   
 <CurrentSlide slide={slide.url} bannerData={bannerData} handleClick={handleClick} key={idx} id={idx} carouselCounter={carouselCounter}/>
  )
  
  )}
 
</div>
<CarouselDots handleClick={handleClick}/>
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
  <span className="dot" onClick={() =>handleClick(0)}></span>
  <span className="dot" onClick={() =>handleClick(1)}></span> 
  <span className="dot" onClick={() =>handleClick(2)}></span> 
  <span className="dot" onClick={() =>handleClick(3)}></span>
   </div>
  )
}

const CurrentSlide = ({products,bannerData,slide, handleClick , id, carouselCounter}) => {
  return (

  <div style={{backgroundImage: `url(${slide})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize:'cover'}} className='carousel'>
  <HeroBanner heroBanner={bannerData.length && bannerData[id]}/> 
  
    </div>
  )
}


