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
    <li className='text-white'><Link to='/'>Home</Link></li>
    <li className='text-white'><Link to='/blog'>Blog</Link></li>
    {
      user?.uid && <li className='text-white'><Link to='/dashboard'>Dashboard</Link></li>
    }

    {
      user?.uid ? <></> :
        <>
          <li className='text-white'><Link to="/login">Login</Link></li>
        </>
    }
  </>

  const profile = <>
    <li className='text-white'><Link to='/dashboard'>Dashboard</Link></li>
    <li className='text-white'><button onClick={handleLogOut}>Sign out</button></li>
  </>


  return (
    <div className="navbar bg-primary/60 sticky top-0 z-[999] backdrop-blur border-b-2 border-blue-200 transition-all duration-500">
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
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
              {profile}
            </ul>
          </div>
        </div>
      }

      {/* <label htmlFor="dashBoard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <Squares2X2Icon className="h-6 w-6 text-white" />
      </label> */}
    </div >
  );
};

export default Header;