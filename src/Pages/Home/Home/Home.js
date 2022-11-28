import React from 'react';
import useTittle from '../../../hooks/useTittle';
import ProductOrderModal from '../../CategoryProducts/ProductOrderModal/ProductOrderModal';
import Advertisement from '../Advertisement.js/Advertisement';
import Categories from '../Categories/Categories';
import UserDocument from '../UserDocument/UserDocument';

const Home = () => {
  useTittle('Home')
  return (
    <>
      <Categories></Categories>
      <UserDocument></UserDocument>
      <Advertisement></Advertisement>
    </>
  );
};

export default Home;