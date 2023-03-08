import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const ProductEdit = () => {
  const id = useParams();
  const { allPhones } = useContext(AuthContext);

  const phone = allPhones.filter(phone => phone._id === id.id);
  console.log(phone);

  return (
    <div>
      <h2 className='text-3xl mb-5 font-semibold'>{id.id}</h2>
    </div>
  );
};

export default ProductEdit;