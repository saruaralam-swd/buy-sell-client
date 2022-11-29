import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=''>
      <div className='flex  gap=10'>
        <UserCircleIcon className='w-12 h-12 inline-block' />
        <h2 className='text-3xl font-semibold'>{user?.displayName}</h2>
      </div>
      <input type="text" defaultValue={user?.email} readOnly className="mt-5 input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default UserProfile;