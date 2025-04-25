import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
<<<<<<< HEAD
import ShopPage from './components/ShopPage';
import CategoriesPage from './components/CategoriesPage';
=======
>>>>>>> 632d40f28fba5bd8fa6b3b17d73850b8255ac0a3
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AccountPage from './components/AccountPage';
<<<<<<< HEAD
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
=======
>>>>>>> 632d40f28fba5bd8fa6b3b17d73850b8255ac0a3
import { CartProvider } from './store/CartContext';
import { AuthProvider } from './store/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-900">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
=======
>>>>>>> 632d40f28fba5bd8fa6b3b17d73850b8255ac0a3
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/account" element={<AccountPage />} />
<<<<<<< HEAD
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
=======
>>>>>>> 632d40f28fba5bd8fa6b3b17d73850b8255ac0a3
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;