import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {

  const categoryProducts = useLoaderData();

  return (
    <div>
      <h2>total product {categoryProducts.length}</h2>
      <div>
        {
          categoryProducts.map(product => <CategoryProduct key={product._id} product={product}></CategoryProduct>)
        }
      </div>
    </div>
  );
};

export default CategoryProducts;