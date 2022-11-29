import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading';

const Category = ({ category }) => {
  const { categoryName, img, _id } = category;

  return (
    <Link to={`/category/${_id}`} className='flex gap-4 border'>
      <div className='flex items-center gap-2'>
        <img src={img} className='w-20' alt="product category img" />
        <h2>{categoryName}</h2>
      </div>
    </Link>
  );
};

export default Category;