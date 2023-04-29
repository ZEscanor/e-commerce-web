import React, {useState, useRef, useEffect} from 'react'
import { Product, FooterBanner, HeroBanner, MiddleSection, NavbarDrop } from '../components';
import {client} from "../lib/client";
import { useStateContext } from '../context/StateContext';

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
 

  const {setProducts} = useStateContext();
  setProducts(products);
const [carouselCounter, setCarouselCounter] = useState(0);
// const [responsiveVariable, setResponsiveVariable] = useState(1400);

let responsiveVariable = 1400
let mql;

if (typeof window !== "undefined") {
   mql = window.matchMedia("(max-width: 500px)");
}

 const [onHover, setOnHover] = useState(false);


//onhover effect on carousel

 
const timeoutRef = useRef(null);


const resetTime = () => {
  if(timeoutRef?.current){
    clearTimeout(timeoutRef.current);
  }
}

const handleMouseEnter = () => {
  resetTime();
  setOnHover(true);
  // console.log("hello");
}

const handleMouseLeave = () => {
  setOnHover(false);
  timeoutRef.current = setTimeout(() => {
    setCarouselCounter((prevCounter) =>
     prevCounter === slideImages.length - 1 ? 0 : prevCounter + 1
    )
  }, 5000);
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

  return (
    
    <div>
    <div style={{overflow:"hidden" ,height:"100%", }}  >
    <div style={{display: 'flex',
 height: '760px',
 transition: "transform ease-out 0.3s", 
 transform: `translateX(${-(carouselCounter * responsiveVariable)}px)`,
 opacity: onHover ? '.9': '1'
 
 }} className='gradientDiv'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  {slideImages.map((slide,idx) => (
   
 <CurrentSlide slide={slide.url} bannerData={bannerData} handleClick={handleClick} key={idx} id={idx} carouselCounter={carouselCounter}/>
  )
  
  )}
 
</div>

</div>
<CarouselDots handleClick={handleClick}/>
    
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

   
   
    

    <FooterBanner footerBanner = {bannerData && bannerData[0]}/>
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
