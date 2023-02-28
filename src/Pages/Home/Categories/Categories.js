import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Categories.css';

const Categories = () => {
  const { categories } = useContext(AuthContext);

  return (
    <div className='my-10 mx-5 bg-white'>
      <h2 className='text-2xl font-bold text-slate-700 mb-5 text-center'>Browse Categories</h2>

      <div className='flex justify-center gap-5'>
        <div className='flex flex-wrap justify-center gap-5'>
          {
            categories.map(category =>
              <div to={`/category/${category?._id}`} className='hover:bg-blue-300 duration-700 w-32 h-32 border rounded-md flex items-center justify-center'>
                <img src={category?.img} className='h-16 w-16 rounded-full' alt="category img" />
              </div>
            )
          }
        </div>
      </div>
    </div>

  );
};

export default Categories;