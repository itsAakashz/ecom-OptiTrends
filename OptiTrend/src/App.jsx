import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Shop from "./pages/shop";
import Cart from './pages/cart';
import Checkout from "./pages/checkout";
import Checkout_summary from "./pages/checkout_summary";
import Checkout_shipping from "./pages/checkout_shipping";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from 'react-redux';
import {store} from './storeRedux';
function App() {
  return (
    <>
      <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shop />} />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout_summary" element={<Checkout_summary />} />
           <Route path="/checkout_shipping" element={<Checkout_shipping />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
        <Footer/>
      </Router>
      </Provider>
    </>
  );
}

export default App;
