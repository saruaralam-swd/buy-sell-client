import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Context/AuthProvider';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'
import dashboardIcon from '../../../assets/Dashboard/dashboard2.svg';
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => {
        console.log(err.message);
      })
  };

  const navMenu = <>
    <li className='text-white'><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink></li>
    <li className='text-white'><NavLink to='/blog'>Blog</NavLink></li>
    {user?.uid && <li className='text-white'><NavLink to='/dashboard'>Dashboard</NavLink></li>}
    {user?.uid ? <></> : <><li className='text-white'><NavLink to="/login">Login</NavLink></li></>}
  </>

  const profile = <>
    <li><NavLink to='/dashboard'> <img src={dashboardIcon} className='w-5 h-5' alt="" /> Dashboard</NavLink> </li>
    <li><button onClick={handleLogOut}> <BiLogOut className='w-5 h-5' /> Sign out</button></li>
  </>

  return (
    <div className="navbar bg-violet-500/60 text-black sticky top-0 z-[999] backdrop-blur  transition-all duration-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon className='h-8 w-8 font-semibold text-white' />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-md w-52">
            {navMenu}
          </ul>
        </div>
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          {navMenu}
        </ul>
      </div>

      {
        user?.uid && <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <UserCircleIcon className='text-white' />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box border w-52 bg-white">
              {profile}
            </ul>
          </div>
        </div>
      }
    </div >
  );
};

export default Header;