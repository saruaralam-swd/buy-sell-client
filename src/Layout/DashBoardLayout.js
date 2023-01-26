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
import dashBoardIcon from '../assets/Dashboard/dashboard2.svg';
import userProfileIcon from '../assets/Dashboard/profile.svg';
import profile from '../assets/Dashboard/img.png'
import products from '../assets/Dashboard/Seller/product.svg';
import addProductIcon from '../assets/Dashboard/Seller/add-product.svg';
import buyersIcon from '../assets/Dashboard/Seller/buyers.svg';

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

      <div className='h-[50px] bg-slate-300 md:hidden'>
        <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          {/* <Squares2X2Icon className="h-6 w-6 text-black mr-2" /> */}
          <img src={dashBoardIcon} className='w-5 h-5 mr-2' alt="" />
          <img src="" alt="" />
          <strong>DashBoard</strong>
        </label>
      </div>

      <div className="drawer drawer-mobile">
        <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content p-5">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 duration-500 bg-base-100 md:bg-base-100/0 lg:bg-slate-100 text-base-content">
            <img src={profile} className='w-24 h-24 block mx-auto rounded-full' alt="" />
            {
              isAdmin && <h2 className='text-center font-bold uppercase'>Admin</h2>
            }
            {
              isSeller && <h2 className='text-center font-bold uppercase'>Seller</h2>
            }
            {
              isBuyer && <h2 className='text-center font-bold uppercase'>Buyer</h2>
            }
            <div className='divider'></div>


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
                <li>
                  <Link to='/dashboard/myProducts'>
                    <img src={products} className='h-6 w-6' alt="" />
                    My Products
                  </Link>
                </li>

                <li>
                  <Link to='/dashboard/addProducts'>
                    <img src={addProductIcon} className='w-6 h-6' alt="" />
                    Add Products
                  </Link>
                </li>

                <li>
                  <Link to='/dashboard/myBuyer'>
                    <img src={buyersIcon} className='w-6 h-6' alt="" />
                    My Buyer
                  </Link>
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