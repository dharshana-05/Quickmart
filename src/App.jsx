import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Pages/Contexts/CartContext';
import { SearchProvider } from './Pages/Contexts/SearchContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Categories from './Pages/Categories';
import './App.css';

function App() {
  return (
    <CartProvider>
      <SearchProvider> 
        <Router>
          <div className="app-container">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} /> 
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:slug" element={<Category />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;