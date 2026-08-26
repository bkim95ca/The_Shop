import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const PayButton = ({ cartItems, email }) => {
    

    const handleCheckout = () => {
        if(cartItems.length <= 0){
            return;
        }
        axios.post(`${API_URL}/api/stripe/create-checkout-session`, {
            cartItems,
            email,
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
            }
        }).catch((err) => console.log(err.message))
    }

    return (
        <>
            <button onClick={() => handleCheckout()} className='checkout-btn' disabled={cartItems.length === 0 || !email}>Check Out</button>
        </>
    );
};

export default PayButton;