import React from 'react';
import s from './style.module.css'
import cart from './empty_cart.jpeg'

const EmptyCart = () => {
    return (
        <div className={s.container}>
            <img className={s.image} src={cart} alt="empty cart" />
            <p className={s.text} >Your cart is empty!</p>
        </div> 
    );
};

export default EmptyCart;