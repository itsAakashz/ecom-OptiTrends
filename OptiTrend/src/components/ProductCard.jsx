import React from 'react';
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ name, price, image }) => {
  return (
    <div>
      <div className="group relative border rounded-lg mt-10 overflow-hidden h-96 lg:w-72 lg:p-10 md:w-64 md:p-10 p-1">
        <div className="lg:group-hover:translate-y-[-50px] transition-transform duration-300">
          <img
            src={image}
            alt={name}
            className="h-auto rounded-md object-center mt-5  mx-auto"
          />
          <CiHeart
            src="/assets/fav.png"
            className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 float-right"
          />
          <h2 className="text-center lg:mt-10 mt-3">{name}</h2>
          <p className="text-lg font-semibold text-center mt-5 lg:mt-10">
            {price}
          </p>
        </div>
        <Link to="/cart">
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 text-white px-2 lg:px-4 py-2 rounded opacity-100 lg:opacity-0 lg:group-hover:opacity-100 bg-[#2C3E50] w-4/5 mx-auto md:w-auto mt-0">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
