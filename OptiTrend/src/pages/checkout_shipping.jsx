import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout_shipping = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    // Save formData to local storage or Redux state if needed
    localStorage.setItem('shippingDetails', JSON.stringify(formData));

    // Navigate to the next step in checkout
    navigate('/checkout'); // Use navigate to programmatically navigate
  };

  return (
    <div>
      <div className='flex flex-col'>
        <Link to="/"><p className='mt-10 lg:opacity-0 md:opacity-0 opacity-100'>← Back</p></Link>
        <p className='text-center font-bold text-xl text-[#2C3E50]'>Checkout</p>
        <img src="src/assets/images/progress2.png" className='self-center m-10' style={{ width: "min-content" }} />
        <h1 className='text-center text-lg text-[#2C3E50] font-semibold'>Shipping Details</h1>
      </div>

      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="p-8 rounded-lg">
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter name"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="eg Johndoe@gmail.com"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="eg +234"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
              <div>
                <label htmlFor="city" className="block text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
              <div>
                <label htmlFor="postalCode" className="block text-gray-700 mb-1">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full rounded-lg border py-2 px-3"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 items-end float-left">
            <Link to="/checkout_summary">
              <button className="text-[#2C3E50] border border-[#2C3E50] hidden sm:block px-auto py-auto rounded-lg w-40 h-10">← Back</button>
            </Link>
          </div>
          <div className="mt-8 items-end float-right w-full lg:w-40 md:w-40">
            <button
              onClick={handleNext}
              className="bg-[#2C3E50] text-white px-auto py-auto rounded-lg w-full lg:w-40 md:w-40 h-10"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <br/><br/><br/>
    </div>
  );
};

export default Checkout_shipping;
