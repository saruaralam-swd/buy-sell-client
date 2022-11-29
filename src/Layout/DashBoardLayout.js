import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/UseAdmin';
import useBuyer from '../hooks/UseBuyer';
import useSeller from '../hooks/UseSeller';
import useTittle from '../hooks/useTittle';
import Header from '../Pages/Shared/Header/Header';

const DashBoardLayout = () => {
  useTittle('Dashboard')
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          
          <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 md:bg-base-100/0 text-base-content">
            <li><Link to='/dashboard'>DashBoard</Link></li>

            {
              isBuyer && <>
                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                <li><Link to='/dashboard/myWishList'>Wish list</Link></li>
              </>
            }

            {
              isSeller && <>
                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                <li><Link to='/dashboard/myBuyer'>My Buyer</Link></li>
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
    </div >
  );
};

export default DashBoardLayout;