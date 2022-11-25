import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading';
import Product from '../../Products/Products/Product';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {

  const { data: advertisement = [], isLoading } = useQuery({
    queryKey: ['advertisement'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertisement`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='px-10'>
      <h2 className="text-2xl my-5 font-semibold">Advertisement</h2>
      <div className=''>
        {
          advertisement.map(product => <AdvertisementCard key={product._id} product={product}></AdvertisementCard>)
        }
      </div>
    </div>
  );
};

export default Advertisement;