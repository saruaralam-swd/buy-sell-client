import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import ProductOrderModal from '../ProductOrderModal/ProductOrderModal';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
  const categoryProducts = useLoaderData();
  const [product, setProduct] = useState(null);
  const { id, setId } = useState(null);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(id);

  return (
    <div className='my-10'>
      <div className='mb-20'>
        <h2 className="text-2xl text-center uppercase font-semibold mb-5">Select Category</h2>
        <div className='flex justify-center '>
          <div>
            <select className="select select-bordered w-56 md:w-[500px]">
              {
                categories.map(c => <option onClick={() => setId(c._id)}><Link to={`/product/${c._id}`} >{c.categoryName}</Link></option>)
              }
            </select>
          </div>
        </div>
      </div>

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