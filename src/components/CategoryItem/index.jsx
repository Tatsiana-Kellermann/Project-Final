import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import { URL } from '../../helpers/links';

const CategoryItem = ({ id, title, image }) => {

    return (
        <Link className={s.item} to={`/categories/${title}/${id}`} >
            <img src={URL + image} alt={title} />
            <p>{title}</p>
        </Link>
    );
};

export default CategoryItem;