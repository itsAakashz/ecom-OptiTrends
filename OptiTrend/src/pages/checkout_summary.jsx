      import React from 'react';
      import ProductList from '../components/ProductList';
      import { Link } from 'react-router-dom';
      import progress from "../assets/images/progress1.png"
      import cartImage1 from "../assets/images/glasses/salt-image-1.png";
      import cartImage2 from "../assets/images/glasses/salt-image-10.png";
      import cartImage3 from "../assets/images/glasses/salt-image-5.png";

      const Checkout_Summary = () => {
        const products = [
          { id: 1, name: "Modern Metal Frame", price: 80, image: cartImage1 },
          { id: 2, name: "Retro Round Frame", price: 65, image: cartImage2 },
          { id: 3, name: "Sophisticated Rimless", price: 90, image: cartImage3 }
        ];

        return (
          <div>
            <div className="flex flex-col">
              <Link to="/">
                <p className="ml-8 lg:ml-24 float-left">← Shop</p>
              </Link>
              <p className="text-center font-bold text-xl text-[#2C3E50]">Checkout</p>
              <img
                src={progress}
                className="self-center m-10 mx-auto w-2/3 lg:w-auto"
              />
              <p className="text-center text-lg font-semibold text-[#2C3E50]">
                Review Order
              </p>
            </div>

            {products.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}

            <hr className="w-5/6 mx-auto h-5" />
            <p className="text-center mt-10 font-bold text-lg text-[#2C3E50]">
              Cart Summary
            </p>
            <div className=" justify-between mx-auto w-5/6">
              <div className="flex flex-wrap relative mt-10 text-[#2C3E50]">
                <p className=" mt-5">Delivery Fee</p>
                <p className="mt-5 absolute right-0">$29.00</p>
              </div>
              <div className="flex flex-wrap relative mb-10 text-[#2C3E50]">
                <p className=" mt-5">Tax</p>
                <p className="mt-5 absolute right-0 ">$7.00</p>
              </div>
              <hr />
              <div className="flex flex-wrap relative text-[#2C3E50]">
                <p className=" mt-5">Subtotal</p>
                <p className="mt-5 absolute right-0 ">$266.00</p>
              </div>
            </div>
            <Link to="/checkout_shipping">
              <div className="w-5/6 mx-auto">
                <button className=" bg-[#2C3E50] rounded text-white h-8 mt-10 w-full text-lg">
                  Confirm Order
                </button>
              </div>
            </Link>
          </div>
        );
      };

      export default Checkout_Summary;
