import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';  
import axios from 'axios';
import { selectCartItems } from '../components/cartSelectors';


export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const customerDetails = useSelector((state) => state.customer);
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handlePaymentChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handleConfirmPayment = async () => {
    setLoading(true);
    try {
      const productsSold = cartItems.map(item => ({
        product_id: item.id,
        amount: item.current_price[0].AUD[0],
        quantity: item.quantity,
        discount: item.discount || 0,
        currency_code: 'Dollar'
      }));

      const response = await axios.post('https://api.timbu.cloud/sales', {
        organization_id: '4108723323df49b18157b4adb5631ef0', 
        products_sold: productsSold,
        currency_code: 'Dollar',
        customer_title: '', 
        first_name: customerDetails.fullName.split(' ')[0],
        last_name: customerDetails.fullName.split(' ')[1],
        email: customerDetails.email,
        phone: customerDetails.phone,
        country_code: '+91',
        mode_of_payment: paymentMode.toLowerCase().replace(' ', '_'),
        sales_status: 'pending',
        description: `Sold items to ${customerDetails.fullName}`
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          Appid: '8N2C3J493DKH2J7',
          Apikey: 'b654bdaf159749e9a54345e54485e10c20240712132334365162'
        }
      });

      if (response.status === 200) {
        setMessage('Payment Done');
        setTimeout(() => {
          setMessage(null);
          navigate('/');
        }, 2000);
      } else {
        setMessage('Payment failed');
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex flex-col'>
        <Link to="/"><p className='ml-24 lg:opacity-0 md:opacity-0 opacity-100'>← Back</p></Link>
        <p className='text-center font-bold text-xl text-[#2C3E50]'>Checkout</p>
        <img src="src/assets/images/progress3.png" className='self-center m-10' style={{ width: "min-content" }} />
        <h1 className='text-center font-semibold text-lg text-[#2C3E50]'>Payment</h1>
      </div>

      <div className="flex flex-wrap w-2/3 mx-auto mt-10 text-[#2C3E50]">
        <label className="flex items-center bg-[#F5F6F7] w-full h-32 rounded-lg pl-10 pt-1 mb-4">
          <input
            name="payment"
            value="Credit Card"
            checked={paymentMode === 'Credit Card'}
            onChange={handlePaymentChange}
            type="radio"
            className="w-7 h-7 mt-1 focus:bg-[#2C3E50] mr-3"
          />
          <div>
            <p className="font-semibold">Credit Card</p>
            <p className="text-sm">Pay with Visa, MasterCard, and other debit and credit cards</p>
          </div>
        </label>

        <label className="flex items-center bg-[#F5F6F7] w-full h-32 rounded-lg pl-10 pt-1">
          <input
            name="payment"
            value="Paypal"
            checked={paymentMode === 'Paypal'}
            onChange={handlePaymentChange}
            type="radio"
            className="w-7 h-7 mt-1 focus:bg-[#2C3E50] mr-3"
          />
          <div>
            <p className="font-semibold">Paypal</p>
            <p className="text-sm">Pay easily, fast, and securely with Paypal</p>
          </div>
        </label>
      </div>

      <div className='w-2/3 mx-auto'>
        <div className="mt-8 items-end float-left">
          <Link to="/shipping">
            <button className="text-[#2C3E50] border border-[#2C3E50] hidden sm:block px-auto py-auto rounded-lg w-40 h-10">← Back</button>
          </Link>
        </div>
        <div className="mt-8 items-end float-right w-full lg:w-40">
          <button
            onClick={handleConfirmPayment}
            disabled={loading}
            className="bg-[#2C3E50] text-white px-auto py-auto rounded-lg w-full lg:w-40 md:w-40 h-10 px-1"
          >
            {loading ? 'Processing...' : 'Confirm Payment'}
          </button>
        </div>
      </div>

      {message && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>{message}</p>
          </div>
        </div>
      )}

      <br /><br /><br />
    </div>
  );
};

export default Checkout;
