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

  if(isAdminLoading || isSellerLoading || isBuyerLoading) {
    return <Loading />
  }

  return (
    <div>
      <div className='flex  gap=10'>
        <UserCircleIcon className='w-12 h-12 inline-block' />
        <h2 className='text-3xl font-semibold'>{user?.displayName}</h2>
        {
          isAdmin && <h2>Account Type: Admin</h2>
        }
        {
          isSeller && <h2>Account Type: Seller</h2>
        }
        {
          isBuyer && <h2>Account Type: Buyer</h2>
        }
      </div>
      <input type="text" defaultValue={user?.email} readOnly className="mt-5 input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default UserProfile;