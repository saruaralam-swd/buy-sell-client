import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const ProfileEditModal = () => {
  const {user} = useContext(AuthContext);

  return (
    <div>
      <input type="checkbox" id="profile-Edit-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="profile-Edit-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <form className='mt-6 space-y-3'>
            <input type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
            <input defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input input-bordered w-full" required />
            <input type="submit" className='btn btn-primary w-full text-xl' value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;