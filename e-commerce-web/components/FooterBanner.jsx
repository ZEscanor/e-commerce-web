import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({footerBanner: {discount,largeText1,largeText2,saleTime, smallText, midText, product, buttonText, image , desc}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
         <p>HeadPhone Mart Inc.</p>
         <h3>Megalodan Protection plan</h3>
         <h3>Limited Time Deal!</h3>
         <p>Only 29.99/month</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3 style={{fontSize:"1rem",} }>The Membership you and you headphones deserve </h3>
          <p>Headphone Mart Totaltech™ Team provides 24/7/365 tech support, up to 24 months of product protection with active membership, free consultation and so much more.</p>
<p> Terms and condition apply</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
          
     </div>
     {/* <img src={urlFor(image)} className='footer-banner-image' /> */}
      </div>
      </div>
  )
}

export default FooterBanner