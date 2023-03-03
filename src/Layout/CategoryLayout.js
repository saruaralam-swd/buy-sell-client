import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import logo from '../assets/image/logo.png'

const CategoryLayout = () => {
  const { categories, categoriesLoading, allPhones } = useContext(AuthContext);

  return (
    <div>
      <div className="text-right lg:hidden">
        <label
          htmlFor="category"
          className="drawer-button  hover:bg-green-100 rounded-md inline-block tooltip tooltip-left"
          data-tip="Product Categories"
        >
          <img src={logo} className="w-10 cursor-pointer" alt="" />
        </label>
      </div>

      <div className="drawer drawer-mobile h-auto overflow-visible">
        <input id="category" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-y-auto">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="category" className="drawer-overlay"></label>

          <ul className="menu w-80 p-2 bg-base-100 text-base-content lg:bg-slate-50">
            <div className="divider">
              <h2 className='font-semibold pl-4 uppercase'>Shop By Categories</h2>
            </div>

            <NavLink to='/category' className={({ isActive }) => isActive ? 'flex justify-between rounded-md px-2 mb-2 bg-[#c9f391]' : 'flex justify-between rounded-md px-2 mb-2 hover:bg-[#c9f391]'}>
              <span>All Phones</span>
            </NavLink>

            {
              !categoriesLoading &&
              categories.map(category =>
                <NavLink to={`/category/${category?._id}`} key={category._id} className={({ isActive }) => isActive ? 'flex justify-between rounded-md px-2 mb-2 bg-[#c9f391]' : 'flex justify-between rounded-md px-2 mb-2 hover:bg-[#c9f391]'}>
                  <span>{category?.categoryName}</span>
                </NavLink>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;