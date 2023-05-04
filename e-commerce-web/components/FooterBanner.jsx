import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({footerBanner: {discount,largeText1,largeText2,saleTime, smallText, midText, product, buttonText, image , desc}}) => {
    const imageZ = urlFor(image).url();
    // console.log(imageZ)

 
  return (
    <div  className='footer-banner-container' style={{backgroundImage: `url(${imageZ})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize:'cover', filter: 'blur(.5px)'}}>
      
      <div className='banner-desc' >
        <div className='left'>
         <p style={{fontWeight:900}}>HeadPhone Mart Inc.</p>
         <h3>Megalodan Protection plan</h3>
         <h3>Limited Time Deal!</h3>
         <p style={{fontWeight:900,
          fontSize: "30px",
          color: "darkblue",
          
        }}>Only 29.99/month</p>
        
        <Link href={`/product/protection`}> 
            <button type='button' style={{
              backgroundColor: "crimson",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer",
              border: "none"
              
            }}>{buttonText}</button>
            </Link>
        </div>
        
   
      </div>
      </div>
  )
}

export default FooterBanner