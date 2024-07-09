import React from 'react';
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="group relative border rounded-lg mt-10 overflow-hidden p-5">
      <div className="lg:group-hover:translate-y-[-50px] transition-transform duration-300 mb-[80px]">
        <img
          src={image}
          alt={name}
          className="h-auto rounded-md object-center  mx-auto"
        />
        <CiHeart className="hover:cursor-pointer opacity-100 lg:opacity-0 lg:group-hover:opacity-100 float-right"/>
        <h2 className="text-center lg:mt-10 mt-3">{name}</h2>
        <p className="text-lg font-semibold text-center lg:mt-10">
          {price}
        </p>
      </div>
        <button
          className="mt-10 absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 text-white lg:px-4 px-1 py-2 lg:py-2 rounded opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          style={{ backgroundColor: "#2C3E50" }}
        >
          Add to Cart
        </button>
    </div>
  );
}

export default ProductCard;
