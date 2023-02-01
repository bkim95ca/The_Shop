import React from 'react'
import Navbar from '../components/Navbar';

const CheckoutSucess = () => {
    return (
        <div className='checkout-success-wrapper'>
            <Navbar />
                <img src="https://t3.ftcdn.net/jpg/02/91/52/22/360_F_291522205_XkrmS421FjSGTMRdTrqFZPxDY19VxpmL.jpg" alt="" />
            <div className='checkout-success-container'>
                <h1 className='checkout-success-header'>Thank you for your order!</h1>
                <div className='checkout-success-content'>
                    <p>Payment Status: paid</p>
                    <p>We appreciate your business! If you have any questions, please contact me through the following links!</p>
                </div>
                <div>
                    <h2 className='contributor-header'>Creator:</h2>
                    <div className='contributor-people'>
                        <div className='contributor-container'>
                            <p className='contributor-name'>
                                Brandon Kim
                            </p>
                            <a href="https://github.com/bkim95ca" target='_blank' rel="noreferrer">
                                <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" className='icons' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CheckoutSucess