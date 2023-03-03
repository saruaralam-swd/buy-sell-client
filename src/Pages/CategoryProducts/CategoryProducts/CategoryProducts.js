import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductOrderModal from '../ProductOrderModal/ProductOrderModal';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
  const id = useParams();
  const { allPhones } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  
  const categoryProducts = (allPhones.filter(phone => phone?.categoryId === id.id));

  return (
    <div>
      <div>
        {
          categoryProducts.map(categoryProduct =>
            <CategoryProduct
              key={categoryProduct._id}
              setProduct={setProduct}
              categoryProduct={categoryProduct}
            > </CategoryProduct>)
        }
      </div>
      {
        product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
      }
    </div>
  );
};

export default CategoryProducts;