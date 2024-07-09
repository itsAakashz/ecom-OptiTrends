import React from 'react';
import ProductCard from "../components/ProductCard";
import img1 from '../assets/images/glasses/salt-image-1.png';
import img2 from '../assets/images/glasses/salt-image-2.png';
import img3 from '../assets/images/glasses/salt-image-3.png';
import img4 from '../assets/images/glasses/salt-image-4.png';
import img5 from '../assets/images/glasses/salt-image-5.png';
import img6 from '../assets/images/glasses/salt-image-1.png';
import img7 from '../assets/images/glasses/salt-image-7.png';
import img8 from '../assets/images/glasses/salt-image-3.png';
import img9 from '../assets/images/glasses/salt-image-5.png';
import img10 from '../assets/images/glasses/salt-image-10.png';
import { Link } from "react-router-dom";
const products = [
  {
    name: "Classic Black Frame",
    price: "$50",
    image: img1,
  },
  {
    name: "Bold Aviator Style",
    price: "$60",
    image: img2,
  },
  {
    name: "Trendy Tortoise Shell",
    price: "$85",
    image: img3,
  },
  {
    name: "Sleek Titanium Frame",
    price: "$85",
    image: img4,
  },
  {
    name: "Modern Metal Frame",
    price: "$85",
    image: img5,
  },
  {
    name: "Stylish Clear Frame",
    price: "$85",
    image: img6,
  },
  {
    name: "Retro Round Glasses",
    price: "$85",
    image: img7,
  },
  {
    name: "Sophisticated Rimless",
    price: "$85",
    image: img8,
  },
  {
    name: "Retro Round Glasses",
    price: "$85",
    image: img9,
  },
  {
    name: "Sleek Titanium Frame",
    price: "$85",
    image: img10,
  },
  {
    name: "Sophisticated Rimless",
    price: "$85",
    image: img10,
  },
  {
    name: "Trendy Tortoise Shell",
    price: "$85",
    image: img10,
  },
  {
    name: "Classic Black Frame",
    price: "$85",
    image: img10,
  },
  {
    name: "Sleek Titanium Frame",
    price: "$85",
    image: img10,
  },
  {
    name: "Stylish Clear Frame",
    price: "$85",
    image: img10,
  },
  {
    name: "Stylish Clear Frame",
    price: "$85",
    image: img10,
  },

  // Add more products as needed
];

const Shop = () => {
  return (
    <>
      <div className="container pt-5 p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-1">
          {products.map((product) => (
            <Link to="/details">
              <ProductCard key={product.id} name={product.name} price={product.price} image={product.image}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
