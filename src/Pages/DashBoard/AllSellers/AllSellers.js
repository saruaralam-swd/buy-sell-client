import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import { CheckBadgeIcon, TrashIcon } from '@heroicons/react/24/solid'

const AllSellers = () => {
  const { user } = useContext(AuthContext);

  const { data: sellers = [], isLoading } = useQuery({
    queryKey: ['mySellers', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allSellers?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(sellers);

  return (
    <div>
      <h2 className="text-3xl text-center">All Sellers</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>verify</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {
              sellers?.map((seller, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{seller?.sellerName}</td>
                  <td>{seller?.sellerEmail}</td>
                  <td>
                    {
                      seller?.verify === "unverified" && <button className='btn btn-secondary btn-sm'>make verify</button>
                    }
                    {
                      seller?.verify === "verified" && <button><CheckBadgeIcon className='h-6 w-6 text-green-500' /> </button>
                    }
                  </td>
                  <td><button><TrashIcon className='h-10 w-10 text-red-400' /></button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;