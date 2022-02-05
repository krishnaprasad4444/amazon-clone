import React from 'react';

import './Home.css';
import { productsData } from '../../constants/products';
import Products from '../Product/Products';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        {productsData.map((products, i) => <Products key={i} items={products} />)}
      </div>
    </div>
  );
};

export default Home;
