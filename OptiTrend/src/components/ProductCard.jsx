import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart();
    setAddedToCart(true);

    // Reset addedToCart state after 2 seconds to clear the feedback message
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };


  return (
    <div>
      <div className="group relative border rounded-lg mt-10 overflow-hidden h-96 lg:w-72 lg:p-10 md:w-64 md:p-10 p-1">
        <div className="lg:group-hover:translate-y-[-50px] transition-transform duration-300">
          <Link  to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-auto rounded-md object-center mt-5 mx-auto"
          />
          </Link>
          <CiHeart className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 float-right" />
          <h2 className="text-center lg:mt-10 mt-3">{name}</h2>
          <p className="text-lg font-semibold text-center mt-5 lg:mt-10">{price}</p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
          <button
            onClick={handleAddToCart}
            className={`text-white px-2 lg:px-4 py-2 rounded bg-[#2C3E50] w-4/5 mx-auto md:w-auto mt-0 ${addedToCart ? 'bg-green-500' : ''}`}
            disabled={addedToCart}
          >
            {addedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
