import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductOrderModal from '../../CategoryProducts/ProductOrderModal/ProductOrderModal';
import AdvertisementCard from './AdvertisementCard';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import ProductGridView from './ProductGridView';
import sortImg from '../../../assets/image/sort.png';

const Advertisement = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [productView, setProductView] = useState('');
  const [isAsc, setIsAsc] = useState('');

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

  if (isAsc === 'Low Price') {
    advertisement.sort(function (a, b) { return a.resalePrice - b.resalePrice });
  }
  if (isAsc === 'High Price') {
    advertisement.sort(function (a, b) { return b.resalePrice - a.resalePrice });
  }

  return (
    <div className='my-20 bg-white'>
      {
        advertisement.length > 0 &&
        <div className='px-10' >
          <div className=''>
            <h2 className="text-2xl text-center font-bold text-slate-700 mb-10">Advertisement Phones</h2>

            <div className='mb-5 flex items-center gap-2'>
              <select onChange={(e) => setIsAsc(e.target.value)} className="select select-bordered select-sm w-56 focus:outline-none">
                <option disabled selected>-- Price --</option>
                <option>Low Price</option>
                <option>High Price</option>
              </select>

              <img src={sortImg} alt="" />

              <BsFillGrid3X3GapFill onClick={() => setProductView(true)} className='h-6 w-6 inline-block cursor-pointer' />
              <FaListUl onClick={() => setProductView(false)} className='w-6 h-6 inline-block cursor-pointer' />
            </div>
          </div>

          {
            isLoading &&
            <div role="status" className='flex justify-center items-center'>
              <svg className="inline mr-2 w-10  h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          }

          <div>
            {
              productView ?
                <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-10'>
                  {
                    advertisement.map(product => <ProductGridView setProduct={setProduct} key={product._id} product={product}></ProductGridView>)
                  }
                </div>
                :
                <div>
                  {
                    advertisement.map(product => <AdvertisementCard setProduct={setProduct} key={product._id} product={product}></AdvertisementCard>)
                  }
                </div>
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