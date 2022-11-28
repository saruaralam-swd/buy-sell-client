import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import { CheckBadgeIcon, TrashIcon } from '@heroicons/react/24/solid'
import useTittle from '../../../hooks/useTittle';

const AllBuyers = () => {
  useTittle('All Buyers')
  const { user } = useContext(AuthContext);

  const { data: buyers = [], isLoading } = useQuery({
    queryKey: ['allBuyers', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allBuyers?email=${user?.email}`, {
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

  console.log(buyers);

  return (
    <div>
      <h2 className="text-3xl text-center">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>delete</th>
            </tr>
          </thead>

          <tbody>
            {
              buyers?.map((buyer, index) =>
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{buyer?.email}</td>
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

export default AllBuyers;