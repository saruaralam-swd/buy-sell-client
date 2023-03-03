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
            categoryProducts.map(categoryProduct =>
              <CategoryProduct
                key={categoryProduct._id}
                setProduct={setProduct}
                categoryProduct={categoryProduct}>
              </CategoryProduct>)
            :
            allPhones.map(phone =>
              <CategoryProduct
                key={phone._id}
                categoryProduct={phone}
                setProduct={setProduct}>
              </CategoryProduct>)
        }
      </div>
      {
        product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
      }
    </div>
  );
};

export default CategoryProducts;