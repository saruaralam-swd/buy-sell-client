import React from 'react';
import { UserCircleIcon, PhoneIcon, MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import useTittle from '../../../hooks/useTittle';

const CategoryProduct = ({ categoryProduct, setProduct }) => {
  const { _id, productName, image, originalPrice, resalePrice, sellerName, location, description, phoneNumber, quality, purchaseTime, usedTime, available, advertise, postTime, verify } = categoryProduct;
  const { todayDate, month, year, hour, minute, seconds } = postTime;
  useTittle('Category')

  return (
    <div className='mb-10 px-5 md:px-10 '>
      <div className='border rounded-lg grid md:grid-cols-4 gap-5'>
        <img src={image} className='lg:h-[280px] lg:w-[320px] mx-auto md:mx-0 col-span-4 md:col-span-2 lg:col-span-1' alt="" />

        <div className='col-span-4 md:col-span-2 lg:col-span-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 pb-10'>


          <div className='space-y-1 lg:border-r-2'>
            <h2 className='text-3xl font-semibold'> {productName}</h2>
            <div className=''>
              <div className='flex gap-10 font-semibold'>
                <p>Official {originalPrice}Tk</p>
                <p>Selling Price: {resalePrice}Tk</p>
              </div>
              <p>Quality: <span className='uppercase'>{quality}</span></p>
              <p>Purchase Time: {purchaseTime}</p>
              <p>Used: {usedTime}</p>
              <p>Post Data: {todayDate > 0 && `${todayDate}-${month}-${year}`} {`${hour} ${minute}m ${seconds}s`}</p>
            </div>
            <p>{description.length > 100 ? (description.slice(0, 100) + "...") : description}</p>
            <div className='space-x-2'>
              <label disabled={available === false} onClick={() => setProduct(categoryProduct)} htmlFor="product-order-modal" className="btn btn-primary btn-sm"> Book Now </label>
              <button className='btn btn-primary btn-sm'>See Details</button>
            </div>
          </div>

          <div className='space-y-1'>
            <p className='uppercase font-semibold'>seller info</p>
            <p> <UserCircleIcon className='h-4 w-4 inline-block mr-2' />{sellerName} {verify && <CheckBadgeIcon className='h-6 w-6 text-green-500 inline-block' />}</p>
            <p> <PhoneIcon className='h-4 w-4 inline-block mr-2' /> {phoneNumber}</p>
            <p> <MapPinIcon className='h-4 w-4 inline-block mr-2' /> {location}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CategoryProduct;