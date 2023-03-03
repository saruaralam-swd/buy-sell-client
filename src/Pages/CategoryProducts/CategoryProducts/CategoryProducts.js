import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ProductOrderModal from '../ProductOrderModal/ProductOrderModal';
import CategoryProduct from './CategoryProduct';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import sortImg from '../../../assets/image/sort.png'

const CategoryProducts = () => {
  const id = useParams();
  const [product, setProduct] = useState(null);
  const { allPhones } = useContext(AuthContext);
  const categoryProducts = (allPhones.filter(phone => phone?.categoryId === id.id));
  const [isAsc, setIsAsc] = useState('');
  const [productsView, setProductsView] = useState(true);

  if (isAsc === 'Low Price') {
    categoryProducts.sort(function (a, b) { return a.resalePrice - b.resalePrice });
    allPhones.sort(function (a, b) { return a.resalePrice - b.resalePrice });
  }
  if (isAsc === 'High Price') {
    categoryProducts.sort(function (a, b) { return b.resalePrice - a.resalePrice });
    allPhones.sort(function (a, b) { return b.resalePrice - a.resalePrice });
  }

  return (
    <div>
      <div className='flex items-center justify-end gap-3 px-5 my-5'>
        <div className='flex items-center'>
          <select onChange={(e) => setIsAsc(e.target.value)} className="select select-bordered select-sm w-56 focus:outline-none">
            <option disabled selected>-- Price --</option>
            <option>Low Price</option>
            <option>High Price</option>
          </select>
          <img src={sortImg} alt="" />
        </div>

        <BsFillGrid3X3GapFill onClick={() => setProductsView(true)} className='w-5 h-5 font-semibold cursor-pointer inline-block' />
        <FaListUl onClick={() => setProductsView(false)} className='w-5 h-5 font-semibold cursor-pointer inline-block' />
      </div>

      <div>
        {
          id.id ?
            categoryProducts.map(categoryProduct =>
              <CategoryProduct
                key={categoryProduct._id}
                setProduct={setProduct}
                categoryProduct={categoryProduct}>
              </CategoryProduct>)
            :
            allPhones.map(phone =>
              <CategoryProduct
                key={phone._id}
                categoryProduct={phone}
                setProduct={setProduct}>
              </CategoryProduct>)
        }
      </div>
      {
        product && <ProductOrderModal product={product} setProduct={setProduct}></ProductOrderModal>
      }
    </div>
  );
};

export default CategoryProducts;