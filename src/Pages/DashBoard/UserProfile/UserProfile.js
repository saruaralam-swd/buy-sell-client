import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react';
import useAdmin from '../../../hooks/UseAdmin';
import useSeller from '../../../hooks/UseSeller';
import useBuyer from '../../../hooks/UseBuyer';
import Loading from '../../../Components/Loading';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  if (isAdminLoading || isSellerLoading || isBuyerLoading) {
    return <Loading />
  }

  return (
    <div className='p-5 md:p-10'>
      <div className='flex gap-2'>
        <UserCircleIcon className='w-14 h-14 inline-block' />
        <div>
          <h2 className='text-3xl font-semibold'>{user?.displayName}</h2>
          {
            isAdmin && <h2 className='text-gray-700 text-sm'>Account Type: Admin</h2>
          }
          {
            isSeller && <h2 className='text-gray-700 text-sm'>Account Type: Seller</h2>
          }
          {
            isBuyer && <h2 className='text-gray-700 text-sm'>Account Type: Buyer</h2>
          }
        </div>
      </div>
    </div>
  );
};

export default UserProfile;