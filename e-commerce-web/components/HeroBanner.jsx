import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner,bannerData}) => {
  // console.log(heroBanner)

  return (
    <div className='hero-banner-container' >
       {/* background-image: url('../public/man.jpg');
       background-size:cover;
  background-repeat: no-repeat; */}
     <div>
      <p className='beats-solo'>
         30% OFF  {heroBanner.smallText}
      </p>
      <h3>{heroBanner.midText}</h3>
      {/* <h1>{heroBanner.largeText1}</h1> */}
      {/* <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image'/> */}
     </div>
     <div>
      <Link href={`/listing`}>
        <button type="button">{heroBanner.buttonText} </button>
      </Link>

      {/* <div className='desc'>
        <h5> Solo Beats 3000 MX5</h5>
        <p> Best Sounding Headphones</p>
      </div> */}

     </div>
      </div>
  )
}

export default HeroBanner
