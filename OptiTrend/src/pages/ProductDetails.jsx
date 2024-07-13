import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import placeholderImage from "../assets/logo.png";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}?organization_id=4108723323df49b18157b4adb5631ef0&size=10&Appid=8N2C3J493DKH2J7&Apikey=b654bdaf159749e9a54345e54485e10c20240712132334365162`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the product data:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-evenly mt-2">
        <div className="lg:px-10">
          <Link to="/">
            <p className="mb-20">← Back to Shop</p>
          </Link>
          <img
            src={
              product.photos && product.photos.length > 0
                ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                : placeholderImage
            }
            className="w-4/5 mx-auto"
            alt={product.name}
          />
        </div>
        <div className="flex flex-col ml-3 lg:ml-0 lg:mt-20 text-[#121A21]">
          <p>Brand: {product.name} | Similar Product from {product.name}</p>
          <h1 className="text-xl font-semibold">{product.name}</h1>
          {product.description && (
            <p className="mt-5 mb-2">Description: {product.description}</p>
          )}
          <hr />
          <label htmlFor="frame" className="mt-5">
            Lens Width and Frame Size
          </label>
          <select
            id="frame"
            className="bg-white border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-[#2C3E50] focus:border-[#2C3E50] block lg:w-full p-2.5 lg:h-14 w-5/6"
          >
            <option selected>Select Frame Size</option>
            <option>28 mm</option>
            <option>30 mm</option>
            <option>32 mm</option>
          </select>
          <p className="my-5">Choose Color</p>
          <div className="grid grid-cols-4 gap-0.5">
            <button className="w-10 h-10 bg-black rounded-full focus:opacity-30 "></button>
            <button className="w-10 h-10 bg-gray-600 rounded-full focus:opacity-30"></button>
            <button className="w-10 h-10 bg-red-600 rounded-full focus:opacity-30"></button>
            <button className="w-10 h-10 bg-purple-600 rounded-full focus:opacity-30"></button>
          </div>
          <p className="text-xl font-bold mt-10">
            Price: {product.current_price && product.current_price[0]?.AUD
              ? `$${product.current_price[0].AUD}`
              : "Price Unavailable"}
          </p>
          <Link to="/cart">
            <button className="btn mt-10 border-2 border-[#2C3E50] text-[#2C3E50] rounded lg:w-56 h-10 w-80 mx-auto">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-lg font-bold ml-10 text-[#2C3E50]">Recommended</h1>
      </div>
      <div className="container pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <ProductCard
            name={product.name}
            price={
              product.current_price && product.current_price.length > 0 && product.current_price[0]?.AUD 
                ? `$${product.current_price[0].AUD[0]}`
                : "Price Unavailable"
            }
            image={
              product.photos && product.photos.length > 0
                ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                : placeholderImage
            }
            addToCart={() => addToCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;