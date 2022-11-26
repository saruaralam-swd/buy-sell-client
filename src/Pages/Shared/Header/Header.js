import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Context/AuthProvider';
import { Bars3Icon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/solid'

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
    {
      user?.uid && <li><Link to='/'>Welcome! {user?.displayName}</Link></li>
    }
    <li><Link to='/'>Home</Link></li>
    {
      user?.uid ? <></> :
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </>
    }
  </>

  const profile = <>
    {/* <li> <Link className="justify-between"> Profile <span className="badge">New</span> </Link> </li> */}
    <li><Link to='/dashboard'>Dashboard</Link></li>
    <li><button onClick={handleLogOut}>Sign out</button></li>
  </>


  return (
    <div className="navbar bg-primary text-white md:px-10 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon className='h-8 w-8 font-semibold' />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-md w-52">
            {navMenu}
          </ul>
        </div>
        <img src={logo} alt="" />
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
                <UserCircleIcon /> 
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
              {profile}
            </ul>
          </div>
        </div>
      }

      <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <Squares2X2Icon className="h-6 w-6 " />
      </label>
    </div >
  );
};

export default Header;

{/* <li tabIndex={0}>
      <a>
        Parent
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      </a>
      <ul className="p-2 bg-primary text-white ">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </li> */}