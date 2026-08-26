import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <main className='landing-page'>
            <nav className='landing-nav'>
                <Link to='/products' className='logo-header'>The Shop</Link>
                <Link to='/checkout' className='landing-bag-link'>Shopping bag</Link>
            </nav>

            <section className='landing-hero'>
                <div className='landing-hero-copy'>
                    <p className='landing-kicker'>NEW SEASON / 2026</p>
                    <h1>Quiet essentials for a life in motion.</h1>
                    <p className='landing-intro'>A focused collection of considered pieces, made to move with you.</p>
                    <Link to='/products' className='landing-primary-link'>Explore the collection <span aria-hidden='true'>-&gt;</span></Link>
                </div>
                <div className='landing-hero-image'>
                    <img src='https://images.unsplash.com/photo-1490481651871-ab68de3e7c9a?auto=format&fit=crop&w=1200&q=85' alt='Neutral clothing arranged in a bright studio' />
                    <span>01 / 04</span>
                </div>
            </section>

            <section className='landing-links' aria-label='Shop collections'>
                <p className='landing-kicker'>BROWSE BY COLLECTION</p>
                <div className='landing-link-grid'>
                    <Link to='/products/menswear' className='landing-category-link'><span>Menswear</span><span aria-hidden='true'>-&gt;</span></Link>
                    <Link to='/products/womenswear' className='landing-category-link'><span>Womenswear</span><span aria-hidden='true'>-&gt;</span></Link>
                    <Link to='/products' className='landing-category-link'><span>All pieces</span><span aria-hidden='true'>-&gt;</span></Link>
                    <Link to='/checkout' className='landing-category-link'><span>Your bag</span><span aria-hidden='true'>-&gt;</span></Link>
                </div>
            </section>

            <footer className='landing-footer'>
                <span>THE SHOP</span>
                <a href='https://github.com/bkim95ca' target='_blank' rel='noreferrer'>Created by Brandon Kim</a>
            </footer>
        </main>
    );
};

export default Landing;