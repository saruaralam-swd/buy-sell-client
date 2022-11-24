import React, { useContext } from 'react';
import { BiLockAlt, BiChevronRightCircle } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm()

  const handleSignUp = data => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div className='bg-gray-100 w-full '>
      <div className='flex justify-center py-20'>
        <div className='w-96 bg-white shadow-md px-4 py-8 rounded-2xl'>
          <h2 className='text-center font-semibold text-xl sm:text-lg text-slate-700'>Get Your Free Account Now.</h2>
          <p className='text-center mt-4 s text-xl sm:text-sm text-slate-500'>Free forever. No payment needed.</p>
          <form onSubmit={handleSubmit(handleSignUp)} className='mt-10'>
            <div className='mb-4'>
              <label htmlFor="name" className='mb-1 text-sm tracking-wide text-gray-600'>Full Name</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiLockAlt /> </div>
                <input type="text" {...register("name")} className='pl-10 border text-sm placeholder-gray-500   rounded-2xl border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
            </div>

            <div className='mb-4'>
              <label htmlFor="email" className='mb-1 text-sm tracking-wide text-gray-600'>E-Mail Address:</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiLockAlt /> </div>
                <input type="email" {...register("email")} className='pl-10 border text-sm placeholder-gray-500   rounded-2xl border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
            </div>

            <div className='my-4'>
              <label htmlFor="email" className='mb-1 text-sm tracking-wide text-gray-600'>Password:</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiLockAlt /> </div>
                <input type="password" {...register("password")} className='pl-10 border text-sm placeholder-gray-500   rounded-2xl border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
              <Link className='flex justify-end text-primary hover:underline'>Forget Password</Link>
            </div>

            <button className='mt-2 flex justify-center items-center gap-2 uppercase focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-[#9333ea]  rounded-2xl py-2 w-full transition duration-150 ease-in'>Sign Up
              <span><BiChevronRightCircle /></span>
            </button>
          </form>
          <div className='divider'>or</div>
          <div>
            <Link><FaGoogle /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;