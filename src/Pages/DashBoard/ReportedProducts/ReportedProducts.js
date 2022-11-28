import React from 'react';
import useTittle from '../../../hooks/useTittle';

const ReportedProducts = () => {
  useTittle('Report Product')
  return (
    <div>
      <h2 className="text-3xl text-center">All Reported Products</h2>
    </div>
  );
};

export default ReportedProducts;