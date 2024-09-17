import React, { useContext, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { BiCategory } from "react-icons/bi";

const CategoryLayout = () => {
  const { categories, categoriesLoading } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!categoriesLoading && categories && categories?.length > 0) {
  //     categories.push({ _id: "all", categoryName: "All Phones" });
  //   }
  // }, [categories, categoriesLoading]);

  return (
    <div>
      <div className="text-right lg:hidden">
        <label
          htmlFor="category"
          className="drawer-button  hover:bg-blue-100  rounded-md inline-block tooltip tooltip-left mr-5 mt-2"
          data-tip="Phone Categories"
        >
          <BiCategory className="w-7 h-7 cursor-pointer" />
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
              <h2 className="font-semibold pl-4 uppercase">Chose Your Brand</h2>
            </div>

            {!categoriesLoading &&
              categories.map((category) => (
                <NavLink
                  to={`/category/${category?.categoryName}`}
                  key={category._id}
                  className={({ isActive }) =>
                    isActive
                      ? "flex justify-between rounded-md px-2 mb-2 bg-blue-300"
                      : "flex justify-between rounded-md px-2 mb-2 hover:bg-slate-200"
                  }
                >
                  <span>{category?.categoryName}</span>
                </NavLink>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
