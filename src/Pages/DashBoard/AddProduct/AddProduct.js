import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');
  // const [categoryId, setCategoryId] = useState('');


  const { data: categories = [], isLoading } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/categories');
      const data = await res.json();
      return data;
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  const category = categories.filter(c => c.categoryName === categoryName);

  const imageHostKey = process.env.REACT_APP_imageBb_Key;

  const handleAddProduct = data => {
    const image = data.image[0];
    const formData = new FormData()
    formData.append('image', image);

    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          data.image = imgData?.data?.url;
          data.categoryName = categoryName;
          data.categoryId = category[0]?._id;
          data.sellerName = user?.displayName;
          data.available = true;

          const date = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
          }

          if (date.hour < 12) {
            date.hour = `${date.hour} am`
          }
          else if (date.hour > 12) {
            date.hour = `${date.hour - 12} pm`
          }
          else if (date.hour === 12) {
            date.hour = `${date.hour} pm`
          }

          data.postTime = date;
          console.log(data);
        }

      })
  };


  return (
    <div className='mt-10'>
      <h2 className="text-3xl text-center font-semibold underline mb-5">Add Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)} className='px-10' >
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Product Name</span></label>
            <input type="text" {...register('productName')} className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Product Image</span></label>
            <input type="file" {...register('image')} className='' />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Category</span></label>
            <select {...register('categoryName')} onChange={(e) => setCategoryName(e.target.value)} className="select select-bordered w-full select-sm">
              {
                categories.map(category => <option key={category._id} >{category.categoryName}</option>)
              }
            </select>
          </div>


          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Original Price</span></label>
            <input type="number" {...register('originalPrice')} className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Resale Price</span></label>
            <input type="number" {...register('resalePrice')} className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>


          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Product Quality</span></label>
            <select {...register('quality')} className="select select-bordered w-full select-sm">
              <option>excellent</option>
              <option>good</option>
              <option>fair</option>
            </select>
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Phone Number</span></label>
            <input type="number" {...register('phoneNumber')} className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Location</span></label>
            <input type="text" {...register('location')} className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Purchase Time</span></label>
            <input type="text" {...register('purChase')} className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Used Time</span></label>
            <input type="text" {...register('usedTime')} className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>
        </div>

        <div className='mt-5'>
          <textarea {...register('description')} className="textarea border-indigo-500 focus:outline-1 focus:outline-indigo-600 w-full text-lg placeholder:italic" placeholder="Product Description"></textarea>
        </div>

        <button className='bg-primary hover:bg-violet-600 duration-300 text-white px-4 py-1 rounded-md '>Add Now</button>
      </form>
    </div>
  );
};

export default AddProduct;