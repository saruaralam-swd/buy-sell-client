import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {
  const { user } = useContext(AuthContext);

  const { data: advertisement = [], isLoading } = useQuery({
    queryKey: ['advertisement'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertisement?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <>
      {
        advertisement.length > 0 &&
        <div className='px-10' >
          <h2 className="text-2xl my-5 font-semibold">Advertisement</h2>
          <div className=''>
            {
              advertisement.map(product => <AdvertisementCard key={product._id} product={product}></AdvertisementCard>)
            }
          </div>
        </div >
      }
    </>
  );
};

export default Advertisement;