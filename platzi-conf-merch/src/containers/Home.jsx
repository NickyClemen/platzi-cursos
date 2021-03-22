import React from 'react';

import Products from '../components/Products';

import initialState from '../initialState';

const Home = () => {
    const { products } = initialState;

    return <Products products={products} />;
};

export default Home;
