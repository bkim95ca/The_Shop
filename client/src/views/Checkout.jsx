import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext';
import PayButton from '../components/PayButton';


const Checkout = () => {
    const { cartItems, totalPrice, onRemove, onChangeQty, onChangeSize } = useStateContext();
    const [email, setEmail] = useState('');
    const count = [1,2,3,4,5,6,7,8,9];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    return (
        <div className='checkout-page'>
            <Navbar />
            <header className='checkout-intro'>
                <p className='catalog-kicker'>THE SHOP / YOUR ORDER</p>
                <h1>Ready when you are.</h1>
            </header>
            <div className='checkout-wrapper'>
                <div className='checkout-cart'>
                    <div className='checkout-section-heading'>
                        <h2>Shopping bag</h2>
                        <span>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
                    </div>
                    <div className='checkout-heading'>
                        <h5>ITEM</h5>
                        <h5>TOTAL</h5>
                    </div>
                    {
                        cartItems.map((item, index)=> {
                            return(
                                <div key={item._id} className='checkout-product-wrapper'>
                                    <img src={item.url[0]} className='checkout-product-img' alt=''/>
                                    <div className='checkout-product-desc'>
                                        <p className='checkout-product-name'>{item.name}</p>
                                        <div className='checkout-product-size'>
                                            <label>Size: </label>
                                            <select className='checkout-product-quantity-select' defaultValue={item.size} onChange={e=>{onChangeSize(item, e.target.value)}}>
                                                {
                                                    sizes.map((size,i)=>{
                                                        return <option value={size} key={i}>{size}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className='checkout-product-quantity'>
                                            <label>Quantity: </label> 
                                            <select className='checkout-product-quantity-select' onChange={e=>{onChangeQty(item, e.target.value)}} defaultValue={item.quantity}>
                                                {
                                                    count.map((num,i)=>{
                                                        return <option value={num} key={i}>{num}</option>
                                                    })
                                                }
                                            </select> 
                                        </div>
                                        <p className='checkout-product-price'>${item.price * item.quantity} USD</p>
                                        <button className='checkout-product-remove' onClick={()=>onRemove(item)}>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {cartItems.length === 0 && <div className='checkout-empty'>
                        <h3>Your bag is waiting.</h3>
                        <p>Add something from the collection to continue.</p>
                        <Link to='/products' className='checkout-link'>Browse products</Link>
                    </div>}
                    <div className='checkout-bottom'>
                        <h5>Order Total</h5>
                        <h5>${totalPrice} USD</h5>
                    </div>
                </div>
            <div className='checkout-right'>
                <h2>Checkout</h2>
                <div className='checkout-form'>
                    <label htmlFor='checkout-email'>Email address</label>
                    <input
                        id='checkout-email'
                        type='email'
                        className='checkout-email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='you@example.com'
                    />
                    <PayButton cartItems={cartItems} email={email}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Checkout