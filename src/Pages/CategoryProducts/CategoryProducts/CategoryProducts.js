import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductOrderModal from '../ProductOrderModal/ProductOrderModal';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
  const id = useParams();
  const [product, setProduct] = useState(null);

  const { allPhones } = useContext(AuthContext);
  const categoryProducts = (allPhones.filter(phone => phone?.categoryId === id.id));

  return (
    <div>
      <div>
        {
          id.id ?
            categoryProducts.length ? categoryProducts.map(categoryProduct =>
              <CategoryProduct
                key={categoryProduct._id}
                setProduct={setProduct}
                categoryProduct={categoryProduct}>
              </CategoryProduct>)
              :
              <h2 className="flex items-center justify-center h-screen text-4xl text-gray-400">No Phone Found</h2>
            :
            allPhones.length ?
              allPhones.map(phone =>
                <CategoryProduct
                  key={phone._id}
                  categoryProduct={phone}
                  setProduct={setProduct}>
                </CategoryProduct>)
              :
              <h2 className="flex items-center justify-center h-screen text-4xl text-gray-400">No Phone Found</h2>
        }
      </div>
      {
        product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
      }
    </div>
  );
};

export default CategoryProducts;