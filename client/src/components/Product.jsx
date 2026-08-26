import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <Grid item xs={12} sm={6} md={4} className='product-card'>
            <Link to={`/product/${product._id}`} className='links'>
                <div className='product-image-frame'>
                    <img className='main-product-image' src={product.url[0]} alt={product.name}/>
                </div>
                <div className='product-card-info'>
                    <h3>{product.name}</h3>
                    <p>${product.price} USD</p>
                </div>
            </Link>
        </Grid>
    )
}

export default Product