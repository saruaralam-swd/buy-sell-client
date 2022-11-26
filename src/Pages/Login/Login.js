import React, { useContext, useState } from 'react';
import { BiLockAlt, BiChevronRightCircle } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/UseToken';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  if (token){
    navigate('/');
  }

  const handleLogin = data => {
    const email = (data.email)
    const password = (data.password)

    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setLoginUserEmail(user?.email)
      })
      .catch(error => { console.log(error.message) })
  };

  return (
    <div className='bg-gray-100 w-full '>
      <div className='flex justify-center py-20'>
        <div className='w-96 bg-white shadow-md px-4 py-8 rounded-2xl'>
          <h2 className='text-center font-semibold text-xl sm:text-lg text-slate-700'>Welcome To Buy and Sell Web Application</h2>
          <p className='text-center mt-4 s text-xl sm:text-sm text-slate-500'>Enter your credentials to access your account</p>
          <form onSubmit={handleSubmit(handleLogin)} className='mt-10'>

            <div className='mb-4'>
              <label htmlFor="email" className='mb-1 text-sm tracking-wide text-gray-600'>E-Mail Address:</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiLockAlt /> </div>
                <input type="email"
                  {...register("email", {
                    required: "Email Address is required"
                  })}
                  className='pl-10 border text-sm placeholder-gray-500   rounded-2xl border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
              {errors.email && <p className='text-red-600 text-xs'>*{errors.email?.message}</p>}
            </div>

            <div className='my-4'>
              <label htmlFor="email" className='mb-1 text-sm tracking-wide text-gray-600'>Password:</label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 '> <BiLockAlt /> </div>
                <input type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "password must be 6 character" }
                  })}
                  className='pl-10 border text-sm placeholder-gray-500   rounded-2xl border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ' />
              </div>
              {errors.password && <p className='text-red-600 text-xs'>*{errors.password?.message}</p>}
              <Link className='flex justify-end text-primary hover:underline'>Forget Password</Link>
            </div>

            <button className='mt-2 flex justify-center items-center gap-2 uppercase focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-[#9333ea]  rounded-2xl py-2 w-full transition duration-150 ease-in'>Sign In
              <span><BiChevronRightCircle /></span>
            </button>
          </form>
          <div className='divider'>or</div>

          {/* <Link><FaGoogle className='inline-block' /></Link>
          <p>Don't have an account? <Link to='/signup'>Create New Account</Link></p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;