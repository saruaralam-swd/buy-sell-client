import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const ProductOrderModal = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { _id, productName, image, originalPrice, resalePrice, sellerName, location, description, phoneNumber, quality, purchaseTime, usedTime, available, advertise, postTime, } = product;
  const { hour, minute, seconds } = postTime;

  const handleProductOrder = product => {
    
  };

  return (
    <>
      <input type="checkbox" id="product-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="product-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Name</h3>

          <form onSubmit={handleProductOrder} className='mt-6 space-y-3'>
            <input type="text" disabled className="input input-bordered w-full" />

            <select name='slot' className="select select-bordered w-full">
              {/* {
                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
              } */}
            </select>

            <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input input-bordered w-full" required />
            <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input input-bordered w-full" required />
            <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />

            <input type="submit" className='btn btn-accent w-full' value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductOrderModal;