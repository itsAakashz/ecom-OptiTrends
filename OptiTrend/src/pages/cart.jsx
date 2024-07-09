import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import minus_icon from "../assets/minus.png";
import plus_icon from "../assets/plus.png";
import cartImage1 from "../assets/images/glasses/salt-image-1.png";
import cartImage2 from "../assets/images/glasses/salt-image-10.png";
import cartImage3 from "../assets/images/glasses/salt-image-5.png";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Modern Metal Frame",
      brand: "Elegant",
      price: 80,
      img: cartImage1,
      size: "28mm",
      color: "black",
    },
    {
      id: 2,
      name: "Retro Rounded Glass",
      brand: "Elegant",
      price: 60,
      img: cartImage2,
      size: "28mm",
      color: "black",
    },
    {
      id: 3,
      name: "Sophisticated Rimless",
      brand: "Image",
      price: 90,
      img: cartImage3,
      size: "28mm",
      color: "black",
    },
  ];

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize all quantities to 1
      return acc;
    }, {})
  );

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * quantities[item.id],
    0
  );

  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto bg-white rounded-lg p-6">
        {/* upper container here */}
        <div className="mt-6 flex justify-between items-center">
          <Link to="/">
            <div className="text-left flex">
              <IoIosArrowRoundBack className="w-10 h-6" />
              Back
            </div>
          </Link>
          <h2 className="text-2xl font-semibold text-center flex-grow">Cart</h2>
          <button className="justify-end content-end ml-auto  lg:py-1 px-2 h-7 lg:h-10 text-center border-black rounded-[10px] border-2 border-solid text-black"> Clear All </button>
        </div>

        {/* Product container here */}
        <div className="space-y-5">
          {cartItems.map((item) => (
            // product container Upper side
            <div key={item.id} >
              <div className="flex items-center justify-between mt-8">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-28 lg:h-15 h-[px] lg:mb-16 md:w-[220px] md:h-[170]"
                  />
                  <div className="">
                    <p className="text-gray-600 hidden sm:block">{`Brand: ${item.brand} | Similar product from ${item.brand}`}</p>
                    <h3 className="lg:text-lg lg:text-[18px] text-[0.6rem] font-medium">{item.name}</h3>                 
                    <div className="flex  md:pr-50 ">
                      <div className="flex-col lg:m-5 m-1">
                        <p className="text-gray-600 text-[14px] lg:text-[18px] lg:m-2  mt-4">Size</p>
                        <p className="text-gray-600 text-[13px] lg:text-[18px] lg:m-2 mt-3">{item.size}</p>
                      </div>

                      <div className="flex-col ml-1 md:ml-5 my-5">
                        <p className="text-gray-600 text-[13px] lg:text-[18px] lg:m-2">Color</p>
                        <GoDotFill className="h-[24px] w-[24px] m-2" />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="lg:text-[28px] text-[18px] font-bold">${item.price}</p>
                  </div>
              </div>
              <div>
              </div>
              {/* // product container lower side */}
              <div className="flex items-center justify-between p-1">

                <button className="lg:w-[220px] px-1 lg:px-4 lg:p-0 p-1 lg:h-7 text-center border-black rounded border-[1px] border-solid text-black">
                  Remove Item
                </button>

                <div className="flex mt-25 md:mt-0 ">
                  <Link className="pr-2 h-[40px] w-[40px]" onClick={() => handleDecrease(item.id)}><img src={minus_icon}/></Link>
                  <p className="px-2  text-[18px]">{quantities[item.id]}</p>
                  <Link className="pr-2 h-[40px] w-[40px]" onClick={() => handleIncrease(item.id)}><img src={plus_icon}/></Link>
                </div>
                </div>
            </div>
          ))}
        </div>
        {/* Summary Section */}
        <h2 className="text-center mt-5 text-gray-600 text-xl">Card Summary</h2>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-600 font-bold">Subtotal:</p>
          <p className="text-sm text-gray-600 font-bold">${subtotal}</p>
        </div>
        <Link to="/checkout_summary">
        <button className="content-center mt-5 w-[100%] h-10 text-[#FEFEFE] bg-[#2C3E50] text-white border-black rounded-[10px] border-2 border-solid text-black text-center">
          Next
        </button>
         </Link>
      </div>
    </div>
  );
};

export default Cart;
