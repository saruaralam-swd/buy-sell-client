import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../Components/Loading';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/UseAdmin';
import useBuyer from '../hooks/UseBuyer';
import useSeller from '../hooks/UseSeller';
import useTittle from '../hooks/useTittle';
import Header from '../Pages/Shared/Header/Header';
import { Bars3Icon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/solid'
import userProfileIcon from '../assets/Dashboard/profile.svg';

import products from '../assets/Dashboard/Seller/product.svg';
import addProductIcon from '../assets/Dashboard/Seller/add-product.svg';

const DashBoardLayout = () => {
  useTittle('Dashboard')
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email)
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  if (isAdminLoading || isSellerLoading || isBuyerLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <Header></Header>

      <div className='h-[50px] bg-slate-300 lg:hidden'>
        <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <Squares2X2Icon className="h-6 w-6 text-black mr-2" />
          <strong>DashBoard</strong>
        </label>
      </div>

      <div className="drawer drawer-mobile">
        <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 md:bg-base-100/0 lg:bg-slate-100 text-base-content">
            <li><Link to='/dashboard'>
              <img src={userProfileIcon} className='w-8 h-8' alt="" />
              DashBoard
            </Link>
            </li>

            {
              isBuyer && <>
                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                <li><Link to='/dashboard/myWishList'>Wish list</Link></li>
              </>
            }

            {
              isSeller && <>
                <li><Link to='/dashboard/myProducts'>
                  <img src={products} className='h-6 w-6 mr-2' alt="" />
                  My Products </Link>
                </li>

                <li><Link to='/dashboard/addProducts'>
                  <img src={addProductIcon} className='w-6 h-6 mr-2' alt="" />
                  Add Products</Link>
                </li>

                <li><Link to='/dashboard/myBuyer'>
                  <img src="" alt="" />
                  My Buyer</Link>
                </li>
              </>
            }

            {
              isAdmin && <>
                <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                <li><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
                <li><Link to='/dashboard/reportedProducts'>Reported products</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;