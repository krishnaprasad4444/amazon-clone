import React from 'react';

import './Product.css';

import { addToCart } from '../../store/actions/cartActions';
import { useDispatch } from 'react-redux';


const Product = ({ item }) => {

    const { id, title, image, price, rating } = item;

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(item));
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p key={i}>🌟</p>))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    );
};

export default Product;
