import React from 'react';

import './Products.css';
import Product from './Product';

const Products = ({ items }) => {
    return <div className='products'>
        {items.map(item => <Product key={item.id} item={item} />)}
    </div>
};

export default Products;
