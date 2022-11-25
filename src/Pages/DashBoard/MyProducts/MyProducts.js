import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const MyProducts = () => {

  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      return data;
    }
  });

  const handleAdvertise = id => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
    })
      .then(res => res.json())
      .then(data => {
        refetch();
        console.log(data);
      })
  }

  return (
    <div>
      <h2 className="text-3xl text-center">My Products</h2>
      <table className="table w-full">

        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>status</th>
            <th>Price</th>
            <th>advertise</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((product, index) =>
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product?.productName}</td>
                <td>{product?.available ? "available" : "sold"}</td>
                <td>{product?.resalePrice} Tk</td>
                <td>
                  {
                    product?.advertise ? "" : <button onClick={() => handleAdvertise(product._id)} className='btn btn-primary btn-sm'>advertise</button>
                  }
                </td>
                <td className='space-x-2'>
                  <button className='btn btn-primary btn-sm'>Edit</button>
                  <button className='btn btn-primary btn-sm'>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;