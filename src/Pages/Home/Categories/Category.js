import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const { categoryName, img, _id } = category;

  return (
      <Link to={`/categories/${_id}`} className='flex gap-4  border hover:border-primary'>
        <img src={img} className='w-10' alt="product category img" />
        <h2>{categoryName}</h2>
      </Link>
  );
};

export default Category;