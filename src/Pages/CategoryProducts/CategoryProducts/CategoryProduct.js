import React from 'react';
import { UserCircleIcon, PhoneIcon, MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import useTittle from '../../../hooks/useTittle';
import toast from 'react-hot-toast';

const CategoryProduct = ({ categoryProduct, setProduct }) => {
  const { _id, productName, image, originalPrice, resalePrice, sellerName, location, description, phoneNumber, quality, purchaseTime, usedTime, available, advertise, postTime, verify } = categoryProduct;
  const { todayDate, month, year, hour, minute, seconds } = postTime;
  useTittle('Category')


  const handleReportToAdmin = id => {
    fetch(`https://used-products-resale-server.vercel.app/productReport/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Report get successful')
        }
      })
  };

  return (
    <div className='px-5'>
      <div className='mb-10'>
        <div className='md:p-7 border border-slate-100 shadow-lg  rounded-lg grid md:grid-cols-4 gap-5'>
          <img src={image} className='lg:h-[280px] lg:w-[320px] mx-auto md:mx-0 col-span-4 md:col-span-2 lg:col-span-1' alt="" />

          <div className='col-span-4 md:col-span-2 lg:col-span-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 pb-10 p-5'>
            
            <div className='space-y-1 lg:border-r-2'>
              <h2 className='text-3xl font-semibold'> {productName}</h2>
              <div className=''>
                <div className='flex gap-10 font-semibold'>
                  <p className='text-blue-500 font-bold text-2xl'>{resalePrice} TK</p>
                  <del>{originalPrice}Tk</del>
                </div>
                <p className='font-semibold'>Quality: <span className='uppercase'>{quality}</span></p>
                <p className='font-semibold'>Purchase Time: {purchaseTime}</p>
                <p className='font-semibold'>Used: {usedTime}</p>
                <div className="rating rating-xs">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" checked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
                </div>
              </div>
              <p>{description.length > 100 ? (description.slice(0, 50) + "...") : description}</p>
              <div className='space-x-2'>
                <label onClick={() => setProduct(categoryProduct)} htmlFor="product-order-modal" className="btn btn-primary btn-sm"> Book Now </label>
                <button onClick={() => handleReportToAdmin(_id)} className='border rounded-md px-4 py-1 bg-red-300 text-black font-semibold'>Report To Admin</button>
              </div>
            </div>

            <div className='space-y-1'>
              <div className='flex'>
                <UserCircleIcon className='h-12 w-12 inline-block mr-2' />
                <div>
                  <p> <span className='font-semibold text-md'>{sellerName}</span> {verify && <CheckBadgeIcon className='h-6 w-6 text-green-500 inline-block' />}</p>
                  <p className='text-xs'>Post Data: {todayDate > 0 && `${todayDate}-${month}-${year}`} {`${hour} ${minute}m ${seconds}s`}</p>
                </div>
              </div>
              <p> <PhoneIcon className='h-4 w-4 inline-block mr-2' /> {phoneNumber}</p>
              <p> <MapPinIcon className='h-4 w-4 inline-block mr-2' /> {location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;