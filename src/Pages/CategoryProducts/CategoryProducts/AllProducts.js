import React, { useContext } from 'react';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Context/AuthProvider';
import CategoryProduct from './CategoryProduct';

const AllProducts = () => {
  const { allPhones, allPhonesLoading } = useContext(AuthContext);

  if(allPhonesLoading) {
    return <Loader />
  }

  return (
    <div>
      {
        allPhones.map(phone => <CategoryProduct key={phone._id} categoryProduct={phone}></CategoryProduct>)
      }
    </div>
  );
};

export default AllProducts;