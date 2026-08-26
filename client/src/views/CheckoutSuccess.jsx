import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const CheckoutSucess = () => {
    return (
        <div className='checkout-success-wrapper'>
            <Navbar />
            <div className='checkout-success-container'>
                <p className='catalog-kicker'>THE SHOP / ORDER CONFIRMED</p>
                <div className='success-mark' aria-hidden='true'>✓</div>
                <h1 className='checkout-success-header'>Thank you for your order.</h1>
                <div className='checkout-success-content'>
                    <p className='success-status'>Payment received</p>
                    <p>We appreciate your business. A confirmation will be sent to your email shortly.</p>
                </div>
                <Link to='/products' className='success-shop-link'>Continue shopping</Link>
            </div>


        </div>
    )
}

export default CheckoutSucess