import React, { useContext, useState } from 'react';
import { BiLockAlt, BiChevronRightCircle, BiUser, BiMailSend, } from "react-icons/bi";
import { FaGoogle, } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/UseToken';
import toast from 'react-hot-toast';
import useTittle from '../../hooks/useTittle';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
  useTittle('SignUp')
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider()

  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  if (token) {
    navigate('/');
  }

  // create user
  const handleSignUp = data => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const role = data.role;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        handleProfileUpdate(name, email, role);
      })
      .catch(error => {
        toast.error(error.message)
      })
  };

  // update user profile
  const handleProfileUpdate = (name, email, role) => {
    const profile = {
      displayName: name,
    };

    updateUser(profile)
      .then(() => {
        saveUser(name, email, role)
      })
      .catch(error => { toast.error(error.message) })
  };

  // save user info
  const saveUser = (name, email, role) => {
    const user = { name, email, role };

    fetch('https://used-products-resale-server.vercel.app/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('successfully create user')
          setCreatedUserEmail(email)
        }
      })
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);

        const userData = {
          name: user?.displayName,
          email: user?.email,
          role: 'bearer',
        };

        fetch('https://used-products-resale-server.vercel.app/users', {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.acknowledged) {
              toast.success('successfully create user')
              setCreatedUserEmail(user?.email)
            }
          })

      })
      .catch(error => {
        toast.error(error.message)
      })
  };


  return (
    <div className='bg-gray-100 w-full '>
      <div className='flex justify-center py-20'>
        <div className=' w-[400px] bg-white shadow-md p-7 rounded-2xl'>
          <h2 className='text-center font-semibold text-xl sm:text-lg text-slate-700'>Get Your Free Account Now.</h2>
          <p className='text-center mt-4 s text-xl sm:text-sm text-slate-500'>Free forever. No payment needed.</p>
          <form onSubmit={handleSubmit(handleSignUp)} className='mt-10'>
            <div className="my-4">
              <label htmlFor="role" className='text-sm  tracking-wide text-gray-600'>Select the user type</label>
              <select {...register('role')} className="mt-1 select  border text-sm placeholder-gray-500   rounded-md border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
                <option>Buyer</option>
                <option>Seller</option>
              </select>
            </div>


            <div className='mb-4'>
              <label htmlFor="name" className='mb-1 text-sm tracking-wide text-gray-600'>Full Name</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiUser /> </div>
                <input type="text"
                  {...register("name", {
                    required: "name is required"
                  })}
                  className='pl-10 mt-1 border text-sm placeholder-gray-500   rounded-md border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
              {errors.name && <p className='text-red-600 text-xs'>*{errors.name?.message}</p>}
            </div>

            <div className='mb-4'>
              <label htmlFor="email" className='mb-1 text-sm tracking-wide text-gray-600'>E-Mail Address:</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiMailSend /> </div>
                <input type="email"
                  {...register("email", {
                    required: "email is required"
                  })}
                  className='pl-10 mt-1 border text-sm placeholder-gray-500   rounded-md border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
              {errors.email && <p className='text-red-600 text-xs'>*{errors.email?.message}</p>}
            </div>

            <div className='my-4'>
              <label htmlFor="password" className='mb-1 text-sm tracking-wide text-gray-600'>Password:</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiLockAlt /> </div>
                <input type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "password must be 6 character" }
                  })}
                  className='pl-10 mt-1 border text-sm placeholder-gray-500   rounded-md border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
              {errors.password && <p className='text-red-600 text-xs'>*{errors.password?.message}</p>}
              <Link className='flex mt-2 justify-end text-primary hover:underline'>Forget Password</Link>
            </div>

            <button className='mt-2 flex justify-center items-center gap-2 uppercase focus:outline-none text-white text-md  bg-primary hover:bg-[#9333ea]  rounded-md py-2 w-full transition duration-150 ease-in'>Sign Up
              <span><BiChevronRightCircle /></span>
            </button>

            <p className='mt-2'>Already have an Account? <Link to='/login' className='text-primary'>Login</Link></p>
          </form>
          <div className='divider'>or</div>

          <button onClick={handleGoogleLogin} className='flex gap-10 btn btn-outline btn-xs btn-primary w-full rounded-md btn-md'>
            <Link><FaGoogle className='inline-block' /></Link>
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;