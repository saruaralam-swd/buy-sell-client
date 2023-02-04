import React from 'react';
import useTittle from '../../../hooks/useTittle';
import Footer from '../../Shared/Footer/Footer';
import Advertisement from '../Advertisement.js/Advertisement';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import UserDocument from '../UserDocument/UserDocument';

const Home = () => {
  useTittle('Home')
  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <UserDocument></UserDocument>
      <Advertisement></Advertisement>
      <Footer></Footer>
    </>
  );
};

export default Home;