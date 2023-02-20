import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductOrderModal from '../../CategoryProducts/ProductOrderModal/ProductOrderModal';
import AdvertisementCard from './AdvertisementCard';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

const Advertisement = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);

  const { data: advertisement = [], isLoading } = useQuery({
    queryKey: ['advertisement'],
    queryFn: async () => {
      const res = await fetch(`https://used-products-resale-server.vercel.app/advertisement?email=${user?.email}`, {
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
    <div className='my-20 bg-white'>
      {
        advertisement.length > 0 &&
        <div className='px-10' >
          <div className='flex items-center justify-between'>
            <div>{" "}</div>
            <h2 className="text-2xl text-center font-bold text-slate-700 mb-5">Advertisement</h2>
            <div className='flex gap-3'>
              <BsFillGrid3X3GapFill className='h-6 w-6 inline-block' />
              <FaListUl className='w-6 h-6 inline-block' />
            </div>
          </div>

          <div className=''>
            {
              advertisement.map(product => <AdvertisementCard setProduct={setProduct} key={product._id} product={product}></AdvertisementCard>)
            }
          </div>
          <div>
            {
              product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
            }
          </div>
        </div >
      }
    </div>
  );
};

export default Advertisement;