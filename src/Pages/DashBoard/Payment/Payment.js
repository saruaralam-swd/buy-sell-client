import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const order = useLoaderData();
  const { productName, price } = order;

  return (
    <div>
      <h2 className='text-2xl '>Payment for <strong>{productName}</strong></h2>
      <p>Please pay <strong>TK{price}</strong></p>
      <div className='w-96 my-12'>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;