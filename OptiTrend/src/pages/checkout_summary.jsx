import React, { useState, useEffect } from "react";
import progress from "../assets/images/progress1.png"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { selectCartItems } from "../components/cartSelectors"; 

const Checkout_Summary = () => {
  const cartItems = useSelector(selectCartItems); // Use selector to get cart items from the store
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const newSubtotal = cartItems.reduce((acc, item) => {
      return acc + item.current_price[0].AUD[0] * item.quantity;
    }, 0);
    setSubtotal(newSubtotal);
  }, [cartItems]);

  return (
    <div className="m-5 lg:m-9">
      <div className="flex flex-col">
        <Link to="/cart">
          <p className="ml-8 lg:ml-24 float-left">← Shop</p>
        </Link>
        <p className="text-center font-bold text-xl text-[#2C3E50]">Checkout</p>
        <img
          src=""
          className="self-center m-10 mx-auto w-2/3 lg:w-auto"
        />
        <p className="text-center text-lg font-semibold text-[#2C3E50]">
          Review Order
        </p>
      </div>

      <div className="space-y-5 lg:mx-9">
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between mt-8">
              <img
                src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                alt={item.name}
                className="w-28 lg:h-15 h-[px] lg:mb-16 md:w-[220px] md:h-[170]"
              />
              <div className="">
                <p className="text-gray-600 hidden sm:block">{`Brand: ${item.brand} | Similar product from ${item.brand}`}</p>
                <h3 className="lg:text-lg lg:text-[12px] text-[0.6rem] font-medium">
                  {item.name}
                </h3>
                <div className="flex md:pr-50">
                  <div className="flex-col lg:m-5 m-1">
                    <p className="text-gray-600 text-[14px] lg:text-[18px] lg:m-2 mt-4">
                      Size
                    </p>
                    <p className="text-gray-600 text-[13px] lg:text-[18px] lg:m-2 mt-3">
                      {item.size}
                    </p>
                  </div>

                  <div className="flex-col ml-1 md:ml-5 my-5">
                    <p className="text-gray-600 text-[13px] lg:text-[18px] lg:m-2">
                      Color
                    </p>
                    <GoDotFill className="h-[24px] w-[24px] m-2" />
                  </div>
                </div>
              </div>
              <div className="text-right lg:mr-4">
                <p className="lg:text-[28px] text-[18px] font-bold">
                  ${item.current_price[0]?.AUD
                    ? `${item.current_price[0].AUD[0]}`
                    : "Price Unavailable"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="w-5/6 mx-auto h-5" />
      <p className="text-center mt-10 font-bold text-lg text-[#2C3E50]">
        Cart Summary
      </p>
      <div className="justify-between mx-auto w-5/6">
        <div className="flex flex-wrap relative mt-10 text-[#2C3E50]">
          <p className="mt-5">Delivery Fee</p>
          <p className="mt-5 absolute right-0">$29.00</p>
        </div>
        <div className="flex flex-wrap relative mb-10 text-[#2C3E50]">
          <p className="mt-5">Tax</p>
          <p className="mt-5 absolute right-0">$7.00</p>
        </div>
        <hr />
        <div className="flex flex-wrap relative text-[#2C3E50]">
          <p className="mt-5">Subtotal</p>
          <p className="mt-5 absolute right-0">${subtotal.toFixed(2)}</p>
        </div>
      </div>
      <Link to="/checkout_shipping">
        <div className="w-5/6 mx-auto">
          <button className="bg-[#2C3E50] rounded text-white h-8 mt-10 w-full text-lg">
            Confirm Order
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Checkout_Summary;
