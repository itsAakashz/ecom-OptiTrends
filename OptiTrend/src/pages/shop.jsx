import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartReducer';
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../api/productApi";
import placeholderImage from "../assets/logo.png";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        setError(error.message);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container pt-5 p-3">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-1">
        {Array.isArray(products) && products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={
              product.current_price[0]?.AUD 
                ? `$${product.current_price[0].AUD[0]}`
                : "Price Unavailable"
            }
            image={
              product.photos && product.photos.length > 0
                ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                : placeholderImage
            }
            addToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
