import React from "react";
import Count from "./count";
import { Link } from "react-router-dom";

export const ProductList = ({ product }) => {
  return (
    <div>
      <div className="flex justify-around mt-16">
        <div className="flex flex-col">
          <img src={product.image} className="" />
          <Link to="/"><button className="btn border-2 border-[#2C3E50] text-[#2C3E50] w-full rounded p-1 lg:p-3">
            Remove Item
          </button></Link>
        </div>
        <div className="flex flex-col text-sm">
          <p className="sm:block hidden">Brand: Elegant | Similar product from Elegant</p>
          <h1 className="text-lg font-semibold mt-1">{product.name}</h1>
          <div className="flex flex-wrap">
            <p className="lg:mt-10 lg:mb-4 mb-1 mt-3">Size</p>
            <p className="lg:ml-20 lg:mt-10 mt-3 lg:mb-1 mb-0.5 ml-2">Color</p>
          </div>
          <div className="flex flex-wrap">
            <p>28mm</p>
            <div class="w-7 h-7 bg-black rounded-full  mb-2 lg:ml-16 ml-1"></div>
          </div>
        </div>
        <div className="flex flex-col font-bold text-xl items-center ">
          <p>${product.price}.00</p>

          <count/>
        </div>
      </div>

      <div className="my-10" />
    </div>
  );
};

export default ProductList;