import React from 'react';
import { useLoaderData } from 'react-router-dom';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const order = useLoaderData();
  const { productName, price} = order;
  console.log(order);

  return (
    <div>
      <h2 className='text-2xl '>Payment for <strong>{productName}</strong></h2>
      <p>Please pay <strong>TK{price}</strong></p>
      <div className='w-96 my-12'>
        {/* <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking}></CheckoutForm>
        </Elements> */}
      </div>
    </div>
  );
};

export default Payment;