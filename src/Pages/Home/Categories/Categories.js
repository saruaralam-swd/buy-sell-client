import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allCategories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);

  // const { data: categories = [] } = useQuery({
  //   queryKey: ['allCategories'],
  //   queryFn: async () => {
  //     const res = await fetch('http://localhost:5000/allCategories');
  //     const data = await res.json();
  //     return data;
  //   }
  // })

  return (
    <div className='w-4/5 mx-auto my-20'>
      <h2 className='text-lg font-semibold mb-4'>Browse items by category</h2>

      <div className='grid grid-cols-3 gap-10'>
        {
          categories.map(category => <Category key={category._id} category={category}></Category>)
        }
      </div>
    </div>
  );
};

export default Categories;