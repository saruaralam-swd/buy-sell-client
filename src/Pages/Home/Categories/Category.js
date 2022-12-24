import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const { categoryName, img, _id } = category;

  return (
    <Link to={`/category/${_id}`} >
      <div className='w-20 h-20 rounded-full ring-2 ring-slate-200 hover:ring-slate-400 hover:ring- flex items-center justify-center'>
        <img src={img} className='h-16 w-16 rounded-full' alt="product category img" />
      </div>
    </Link>
  );
};

export default Category;