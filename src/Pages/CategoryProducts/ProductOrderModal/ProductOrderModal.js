import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ProductOrderModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  const { _id, productName, image, resalePrice } = product;
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleProductOrder = data => {
    data.name = user?.displayName;
    data.email = user?.email;
    data.price = resalePrice;
    data.productName = productName;
    data.productId = _id;
    data.productImage = image;

      fetch(`http://localhost:5000/order`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(productData => {
          console.log(productData);
          if (productData.acknowledged) {

            fetch(`http://localhost:5000/available/${_id}`, {
              method: 'PUT',
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                setProduct(null);
                toast.success(`${productName} product order successful`)
              })
          }
        })
  };

  return (
    <>
      <input type="checkbox" id="product-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="product-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{productName}</h3>

          <form onSubmit={handleSubmit(handleProductOrder)} className='mt-6 space-y-3'>
            <input type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
            <input defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input input-bordered w-full" required />
            <input type="number" defaultValue={resalePrice} disabled className="input input-bordered w-full" required />
            <input {...register('phoneNumber')} type="number" placeholder='Your Phone Number' className="input input-bordered w-full" required />
            <input {...register('meetingLocation')} type="text" placeholder='Add receive place' className="input input-bordered w-full" required />

            <input type="submit" className='btn btn-accent w-full text-xl' value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductOrderModal;