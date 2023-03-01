import React from 'react';

const ProductGridView = ({ product, setProduct, setSellerInfo }) => {
  const { _id, verify, productName, image, originalPrice, resalePrice, sellerName, location, description, phoneNumber, quality, purchaseTime, usedTime, available, advertise, postTime, } = product;

  return (
    <div className='border rounded-lg border-slate-100 shadow-lg hover:shadow-2xl duration-500'>
      <img className='md:h-[280px] lg:h-[200px] mx-auto my-5' src={image} alt="" />
      <div className='p-5'>
        <h2 className='text-2xl'>{productName}</h2>
        <div className='flex items-center gap-5 my-1'>
          <p className='text-blue-500 font-bold text-xl'>{resalePrice} TK</p>
          <p className='text-slate-600'><del>{originalPrice} TK</del></p>
        </div>
        <label onClick={() => setProduct(product)} htmlFor="product-order-modal" className="btn btn-primary btn-sm mr-2"> Book Now </label>
      </div>
    </div>
  );
};

export default ProductGridView;