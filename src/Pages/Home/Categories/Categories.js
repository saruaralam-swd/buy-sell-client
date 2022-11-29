import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import Category from './Category';

const Categories = () => {

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch(`https://used-products-resale-server.vercel.app/categories`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }



  return (
    <div className='px-10 my-20'>
      <h2 className="text-2xl font-bold text-slate-700 mb-3">Browse items by category</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
        {
          categories.map(category => <Category key={category._id} category={category}></Category>)
        }
      </div>
      
    </div>
  );
};

export default Categories;