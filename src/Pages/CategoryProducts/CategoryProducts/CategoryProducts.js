import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductOrderModal from '../ProductOrderModal/ProductOrderModal';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
  const categoryProducts = useLoaderData();
  const [product, setProduct] = useState(null);

  return (
    <div>
      <h2>total product {categoryProducts.length}</h2>
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