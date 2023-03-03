import React, { useContext, useState } from 'react';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductOrderModal from '../ProductOrderModal/ProductOrderModal';
import CategoryProduct from './CategoryProduct';

const AllProducts = () => {
  const { allPhones, allPhonesLoading } = useContext(AuthContext);
  const [product, setProduct] = useState(null);


  if (allPhonesLoading) {
    return <Loader />
  }

  return (
    <div>
      <div>
        {
          allPhones.map(phone =>
            <CategoryProduct
              key={phone._id}
              categoryProduct={phone}
              setProduct={setProduct}
            >
            </CategoryProduct>)
        }
      </div>

      {
        product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
      }
    </div>
  );
};

export default AllProducts;