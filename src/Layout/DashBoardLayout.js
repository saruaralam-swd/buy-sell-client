import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Header from '../Pages/Shared/Header/Header';

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side bg-white">
          <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
            <li><Link to='/dashboard/myWishList'>Wish list</Link></li>
            <li><Link to='/dashboard/myProducts'>My Products</Link></li>
            <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
            <li><Link to='/dashboard/myBuyer'>My Buyer</Link></li>
            <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
            <li><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
            <li><Link to='/dashboard/reportedProducts'>Reported products</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;