import React from 'react';

const AddProduct = () => {

  

  return (
    <div className='mt-10'>
      <h2 className="text-3xl text-center font-semibold underline mb-5">Add Product</h2>
      <form className='px-10' >
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Product Name</span></label>
            <input type="text" className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Product Image</span></label>
            <input type="file" className='' />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Category</span></label>
            <select className="select select-bordered w-full select-sm">
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>


          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Original Price</span></label>
            <input type="number" className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Resale Price</span></label>
            <input type="number" className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>


          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Product Quality</span></label>
            <select className="select select-bordered w-full select-sm">
              <option>excellent</option>
              <option>good</option>
              <option>fair</option>
            </select>
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Phone Number</span></label>
            <input type="number" className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Location</span></label>
            <input type="text" className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Years of use</span></label>
            <input type="text" className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>

          <div>
            <label className="label text-sm font-semibold"><span className="label-text">Post Time</span></label>
            <input type="text" className='border border-indigo-500 focus:outline-1 focus:outline-indigo-600  w-full rounded-md px-4 py-1' required />
          </div>
        </div>

        <div className='mt-5'>
          <textarea className="textarea border-indigo-500 focus:outline-1 focus:outline-indigo-600 w-full text-lg placeholder:italic" placeholder="Product Description"></textarea>
        </div>

        <button className='bg-primary hover:bg-violet-600 duration-300 text-white px-4 py-1 rounded-md '>Add Now</button>
      </form>
    </div>
  );
};

export default AddProduct;