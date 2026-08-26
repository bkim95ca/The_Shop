import React from 'react';
import Grid from '@mui/material/Grid'
import Product from './Product'

const ProductTable = ({ products }) => {

    return (
        <main className='catalog-page'>
            <header className='catalog-header'>
                <div>
                    <p className='catalog-kicker'>THE SHOP / COLLECTION</p>
                    <h1>Everyday pieces, considered.</h1>
                </div>
                <p className='catalog-count'>{products.length} {products.length === 1 ? 'item' : 'items'}</p>
            </header>
            {products.length > 0 ? (
                <Grid container spacing={{ xs: 2, md: 4 }} className='product-grid'>
                    {products.map((product) => (
                        <Product product={product} key={product._id} />
                    ))}
                </Grid>
            ) : (
                <section className='catalog-empty' aria-live='polite'>
                    <h2>No pieces found.</h2>
                    <p>Try another collection or check back soon.</p>
                </section>
            )}
        </main>
    )
}

export default ProductTable