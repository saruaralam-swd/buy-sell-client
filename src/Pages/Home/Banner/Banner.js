import React from 'react';
import img from '../../../assets/banner-img-1.webp'

const Banner = () => {
  return (
    <div className='bg-[#FAFAFA] px-10 py-20'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-4xl lg:text-6xl font-semibold mb-4'>Ecommerce for a new era.</h2>
          <button className='inline-block uppercase border rounded-full px-4 py-1 bg-indigo-600 text-white font-semibold hover:bg-indigo-600'>View product tour</button>
        </div>
        <img src={img} className='w-1/5 hidden md:block' alt="" />
      </div>
    </div>
  );
};

export default Banner;