import React from 'react';

const Product = ({ product }) => {
  console.log(product);
  const { _id, name, picture, originalPrice, resalePrice, sellerName, useTime, location, description, mobileNumber, processTime, quality, time } = product;

  return (
    <div className=''>
      <div className='border rounded-md'>
        <h2 className='text-center text-2xl font-semibold'> {name}</h2>
        <img src={picture} className='w-4/5 mx-auto' alt="" />
        <p>Original Price: {originalPrice} Tk</p>
        <p>Sale Price: {resalePrice}</p>
        <p>seller name: {sellerName}</p>
        <p>From: {location}</p>
        <p>Use : {useTime} days</p>
        <p>post data: {time}</p>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Product;