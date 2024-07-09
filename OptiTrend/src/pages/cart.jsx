import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import cartImage1 from "../assets/images/glasses/salt-image-1.png"; // replace with actual image paths
import cartImage2 from "../assets/images/glasses/salt-image-10.png";
import cartImage3 from "../assets/images/glasses/salt-image-5.png";
import { GoDotFill } from "react-icons/go";
import { PiMinusSquareDuotone } from "react-icons/pi";
import minus_icon from "../assets/minus.png";
import plus_icon from "../assets/plus.png";
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
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
        {/* upper container here */}
        <div className="mt-6 flex justify-between items-center">
          <Link to="/">
            {" "}
            <div className="text-left flex">
              <IoIosArrowRoundBack className="w-10 h-6" />
              Back
            </div>
          </Link>
          <h2 className="text-2xl font-semibold text-center flex-grow">Cart</h2>
          <button className="justify-end content-end ml-auto  lg:py-1 px-2 h-7 lg:h-10 text-center border-black rounded-[10px] border-2 border-solid text-black"> Clear All </button>
        </div>
        {/* Product conatiner container here */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            // product conatiner Upper side
            <div key={item.id} >
              <div className="flex items-center justify-between p-1 mt-8">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-28 lg:h-15 object-cover rounded md:w-[220px] md:h-[170]"
                  />
                  <div className="">
                    <p className="text-gray-600 hidden sm:block">{Brand: ${item.brand} | Similar product from ${item.brand}}</p>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[28px] font-bold">${item.price}</p>
                  </div>
              </div>
              <div>
              </div>
              {/* // product conatiner lower side */}
              <div className="flex items-center justify-between p-1">
                <button className="w-[220px] px-4 lg:px-2 lg:h-7 text-center border-black rounded border-2 border-solid text-black">
                  Remove Item
                </button>
                <div className="flex pr-0 md:pr-50 ">
                  <div className="flex-col m-5">
                    <p className="text-gray-600 m-2">Size</p>
                    <p className="text-gray-600 m-2">{item.size}</p>
                  </div>
                  <div className="flex-col ml-1 md:ml-5 my-5">
                    <p className="text-gray-600 text-[16px] m-2">Color</p>
                    <GoDotFill className="h-[24px] w-[24px] m-2" />
                  </div>
                </div>
                <div className="flex mt-32 md:mt-0 ">
                  <Link className="pr-2 h-[40px] w-[40px]"><img src={minus_icon}/></Link>
                  <p className="px-2  text-[18px]">1</p>
                  <Link className="pr-2 h-[40px] w-[40px]"><img src={plus_icon}/></Link>
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
        <Link to="/checkout_shipping">
        <button className="content-center mt-5 w-[100%] h-10 text-[#FEFEFE] bg-[#2C3E50] text-white border-black rounded-[10px] border-2 border-solid text-black text-center">
          Next
        </button>
         </Link>
      </div>
    </div>
  );
};
export default Cart;
