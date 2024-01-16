import React from 'react';
import s from './style.module.css';
import image from './page-not-found.gif';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className={s.page}>
            <img className={s.img} src={image} alt="" />
            <Link to="/" className={s.home_btn}>GO BACK!</Link>
        </div>
    );
};

export default NotFoundPage;