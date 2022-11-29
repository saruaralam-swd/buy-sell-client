import React from 'react';
import toast from 'react-hot-toast';
import { UserCircleIcon, PhoneIcon, MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

const AdvertisementCard = ({ product, setProduct }) => {
  const { _id, verify, productName, image, originalPrice, resalePrice, sellerName, location, description, phoneNumber, quality, purchaseTime, usedTime, available, advertise, postTime, } = product;
  const { todayDate, month, year, hour, minute, seconds } = postTime;

  const handleReportToAdmin = id => {
    fetch(`http://localhost:5000/productReport/${id}`, {
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
    <div className='mb-10'>
      <div className='md:p-7 border border-slate-100 shadow-lg rounded-lg grid md:grid-cols-4 gap-5'>
        <img src={image} className='md:h-[280px] lg:h-[200px]  col-span-4 md:col-span-2 lg:col-span-1' alt="" />

        <div className='col-span-4 md:col-span-2 lg:col-span-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pb-10 p-5'>
          <div className='space-y-1 md:border-r-2 md:pr-2'>
            <h2 className='text-2xl font-semibold'> {productName} </h2>
    
            
            <div className='flex gap-10 font-semibold'>
              <p className='text-blue-500 font-bold text-2xl'>{resalePrice} TK</p>
              <del>{originalPrice}Tk</del>
            </div>

            <p>{description.length > 100 ? (description.slice(0, 100) + "...") : description}</p>
            <div className=''>
              <label onClick={() => setProduct(product)} htmlFor="product-order-modal" className="btn btn-primary btn-sm mr-2"> Book Now </label>
              <button onClick={() => handleReportToAdmin(_id)} className=' mt-2 md:mt-0 border rounded-md px-4 py-1 bg-red-300 text-black font-semibold'>Report To Admin</button>
            </div>
          </div>

          <div className='space-y-1'>
            <div className='flex'>
              <UserCircleIcon className='h-12 w-12 inline-block mr-2' />
              <div>
                <p> <span className='font-semibold text-md'>{sellerName}</span> {verify && <CheckBadgeIcon className='h-6 w-6 text-indigo-600 inline-block' />}</p>
                <p className='text-xs'>Post Data: {todayDate > 0 && `${todayDate}-${month}-${year}`} {`${hour} ${minute}h ${seconds}s`}</p>
              </div>
            </div>
            <p> <PhoneIcon className='h-4 w-4 inline-block mr-2' /> {phoneNumber}</p>
            <p> <MapPinIcon className='h-4 w-4 inline-block mr-2' /> {location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;